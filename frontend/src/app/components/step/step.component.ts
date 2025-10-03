import { Component } from '@angular/core';
import { STEPS_LIST } from './constants';
import { Form } from '../../types/form';
import { billingTypes, planTypes } from 'src/app/enums/form.enums';

type state = 1 | 2 | 3 | 4;

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  formState: state = 1;
  steps = STEPS_LIST;
  billingTypes = billingTypes;
  plantTypes = planTypes;

  data: Form = {
    name: '',
    email: '',
    phoneNumber: '',
    plan: planTypes.arcade,
    planType: billingTypes.monthly,
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  };

  isCheckedCheckbox1: boolean = false;
  isCheckedCheckbox2: boolean = false;
  isCheckedCheckbox3: boolean = false;

  toggleCheckbox(number: number) {
    switch (number) {
      case 1: {
        this.isCheckedCheckbox1 = !this.isCheckedCheckbox1;
        console.log("checkbox 1 : ", this.isCheckedCheckbox1);
        break;
      };
      case 2: {
        this.isCheckedCheckbox2 = !this.isCheckedCheckbox2;
        console.log("checkbox 2 : ", this.isCheckedCheckbox2);
        break;
      };
      case 3: {
        this.isCheckedCheckbox3 = !this.isCheckedCheckbox3;
        console.log("checkbox 3 : ", this.isCheckedCheckbox3);
        break;
      };
      default: {
        console.log('Invalid checkbox number');
      }
    }
  }

  handleChangeData<K extends keyof Form>(property: K, newValue: Form[K]) {
    this.data[property] = newValue;
  }

  validateInsertedData(): boolean {
    switch (this.formState) {
      case 1: {
        if (!this.data.name.trim()) return false;
        if (!this.data.email.trim()) return false;
        if (!this.data.phoneNumber.trim()) return false;
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
    if (this.validateInsertedData()) { }
    if (this.formState < 4) this.formState++;
  }

  previousStep() {
    if (this.formState > 1) this.formState--;
  }

}
