import { Component } from '@angular/core';

type state = 1 | 2 | 3 | 4;

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  private formState: state = 1;

  nextStep() {
    if (this.formState < 4) this.formState++;
  }

  previousStep() {
    if (this.formState > 1) this.formState--;
  }

}
