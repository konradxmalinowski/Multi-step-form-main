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

  ngOnInit() {
    this.localStorageService.init();
  }

  formState: state = this.localStorageService.getStateFromLocalStorage();
  steps = STEPS_LIST;
  billingTypes = billingTypes;
  plantTypes = planTypes;
  PropertiesNames = PropertiesNames;

  data: Form = {
    name: this.localStorageService.getPropertyFromLocalstorage(PropertiesNames.name) ?? '',
    email: this.localStorageService.getPropertyFromLocalstorage(PropertiesNames.email) ?? '',
    phoneNumber: this.localStorageService.getPropertyFromLocalstorage(PropertiesNames.phoneNumber) ?? '',
    planType: this.localStorageService.getPropertyFromLocalstorage(PropertiesNames.planType) as billingTypes ?? billingTypes.monthly,
    plan: this.localStorageService.getPropertyFromLocalstorage(PropertiesNames.plan) as planTypes ?? this.plantTypes.arcade,
    onlineService: this.localStorageService.getPropertyFromLocalstorage(PropertiesNames.onlineService) ?? false,
    largerStorage: this.localStorageService.getPropertyFromLocalstorage(PropertiesNames.largerStorage) ?? false,
    customizableProfile: this.localStorageService.getPropertyFromLocalstorage(PropertiesNames.customizableProfile) ?? false,
  };

  inputNameMessage: string | null = null;
  inputEmailMessage: string | null = null;
  inputPhoneNumberMessage: string | null = null;

  isYearly: boolean = this.data.planType === billingTypes.yearly;

  isCheckedCheckbox1: boolean = true;
  isCheckedCheckbox2: boolean = false;
  isCheckedCheckbox3: boolean = false;

  toggleCheckbox(number: number) {
    switch (number) {
      case 1: return this.handleChangeCheckboxes(1);
      case 2: return this.handleChangeCheckboxes(2);
      case 3: return this.handleChangeCheckboxes(3);
      default: {
        console.log('Invalid checkbox number');
      }
    }
  }

  handleChangeData<K extends PropertiesNames>(property: K, newValue: Form[K]) {
    this.data[property] = newValue;
    this.localStorageService.savePropertyToLocalStorage(property, newValue);
  }

  handleChangeCheckboxes(id: number) {
    switch (id) {
      case 1: {
        this.isCheckedCheckbox1 = !this.isCheckedCheckbox1;
        this.isCheckedCheckbox2 = false;
        this.isCheckedCheckbox3 = false;
        console.log("checkbox 1 : ", this.isCheckedCheckbox1);
        this.handleChangeData(PropertiesNames.plan, planTypes.arcade);
        break;
      };
      case 2: {
        this.isCheckedCheckbox2 = !this.isCheckedCheckbox2;
        this.isCheckedCheckbox1 = false;
        this.isCheckedCheckbox3 = false;
        console.log("checkbox 2 : ", this.isCheckedCheckbox2);
        this.handleChangeData(PropertiesNames.plan, planTypes.pro);
        break;
      };
      case 3: {
        this.isCheckedCheckbox3 = !this.isCheckedCheckbox3;
        this.isCheckedCheckbox1 = false;
        this.isCheckedCheckbox2 = false;
        console.log("checkbox 3 : ", this.isCheckedCheckbox3);
        this.handleChangeData(PropertiesNames.plan, planTypes.advanced);
        break;
      };
      default: {
        console.log('Invalid checkbox id');
      }
    }
  }

  validateInsertedData(): boolean {
    switch (this.formState) {
      case 1: {
        if (!this.data.name.trim()) {
          this.inputNameMessage = "Enter name";
        }
        if (!this.data.email.trim()) {
          this.inputEmailMessage = "Enter email";
        };
        if (!this.data.phoneNumber.trim()) {
          this.inputPhoneNumberMessage = "Enter phone number";
          return false;
        }
        break;
      };
      case 2: {
        if (!this.data.plan) return false;
        break;
      };
      default: return true;
    }
    return true;
  }

  nextStep() {
    if (!this.validateInsertedData()) {
      return;
    }

    if (this.formState < 4) {
      this.formState++;
      this.localStorageService.addToLocalStorage(this.formState as state);
    }
  }

  previousStep() {
    if (this.formState > 1) {
      this.formState--;
      this.localStorageService.addToLocalStorage(this.formState as state);
    };
  }
}
