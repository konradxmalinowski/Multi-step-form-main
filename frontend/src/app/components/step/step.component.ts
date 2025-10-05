import { Component } from '@angular/core';
import { STEPS_LIST } from './constants';
import { Form, state } from '../../types/form';
import { billingTypes, planTypes } from 'src/app/enums/form.enums';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { FormService } from 'src/app/services/form.service';
import { PropertiesNames } from 'src/app/enums/localStorage.enums';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  constructor(private localStorageService: LocalStorageService, private formService: FormService) { }

  formState: state = this.localStorageService.getPropertyFromLocalstorage('formState');
  steps = STEPS_LIST;
  billingTypes = billingTypes;
  planTypes = planTypes;
  PropertiesNames = PropertiesNames;

  data: Form = this.localStorageService.getAllProperties();

  inputNameMessage: string | null = null;
  inputEmailMessage: string | null = null;
  inputPhoneNumberMessage: string | null = null;

  isYearly: boolean = this.data.planType === billingTypes.yearly;

  toggleCheckbox(number: 1 | 2 | 3) {
    switch (number) {
      case 1: return this.handleChangeData(PropertiesNames.plan, planTypes.arcade);
      case 2: return this.handleChangeData(PropertiesNames.plan, planTypes.advanced);
      case 3: return this.handleChangeData(PropertiesNames.plan, planTypes.pro);
    }
  }

  handleChangeData<K extends PropertiesNames>(property: K, newValue: Form[K]) {
    this.data[property] = newValue;
    this.localStorageService.savePropertyToLocalStorage(property, newValue);
    this.validateInsertedData();
    console.log(property, newValue);
  }


  validateInsertedData(): boolean {
    switch (this.formState) {
      case 1: {
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,50}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{9}$/;

        if (!this.data.name.trim()) {
          this.inputNameMessage = "Enter name";
          return false;
        } else if (!nameRegex.test(this.data.name.trim())) {
          this.inputNameMessage = "Enter a valid name";
          return false;
        } else {
          this.inputNameMessage = null;
        }

        if (!this.data.email.trim()) {
          this.inputEmailMessage = "Enter email";
          return false;
        } else if (!emailRegex.test(this.data.email.trim())) {
          this.inputEmailMessage = "Enter a valid email address";
          return false;
        } else {
          this.inputEmailMessage = null;
        }

        if (!this.data.phoneNumber) {
          this.inputPhoneNumberMessage = "Enter phone number";
          return false;
        } else if (!phoneRegex.test(this.data.phoneNumber)) {
          this.inputPhoneNumberMessage = "Enter a valid phone number";
          return false;
        } else {
          this.inputPhoneNumberMessage = null;
        }

        return true;
      }

      case 2: {
        if (!this.data.plan) return false;
        break;
      }
    }

    return true;
  }

  submit() {
    try {
      this.formService.insertForm(this.data).subscribe({
        next: (response) => {
          console.log('Successfully added: ', response);
          this.nextStep();
        },
        error: (error) => {
          if (error instanceof Error) console.log(error.message);
          else console.log("Failed to insert form");
        },
      })
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      else console.log("Failed to insert form");
    }
  }

  reset() {
    this.localStorageService.resetAllLocalStorageProperties();
    this.formState = 1;
  }


  nextStep() {
    if (!this.validateInsertedData()) {
      return;
    }

    if (this.formState < 4) {
      this.formState++;
      this.localStorageService.savePropertyToLocalStorage('formState', this.formState as state);
    }
  }

  previousStep() {
    if (this.formState > 1) {
      this.formState--;
      this.localStorageService.savePropertyToLocalStorage('formState', this.formState as state);
    };
  }
}
