import { Component } from '@angular/core';
import { STEPS_LIST } from './constants';
import { Form } from '../types/form';

type state = 1 | 2 | 3 | 4;

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  formState: state = 1;
  steps = STEPS_LIST;

  data: Form = {
    name: '',
    email: '',
    phoneNumber: '',
    plan: '',
    planType: '',
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  };

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
        if (!this.data.plan.trim()) return false;
        if (!this.data.planType.trim()) return false;
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
