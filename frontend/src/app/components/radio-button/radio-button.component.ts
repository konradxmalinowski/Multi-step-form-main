import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class CheckboxComponent {
  @Input() label = '';
  @Input() icon = '';
  @Input() price = '';
  @Input() bonus = false;
  @Input() isChecked = false;

  get hasBlueBorder(): boolean {
    return this.isChecked;
  }

  get changedPrice(): string {
    return this.price;
  }

  get isYearly(): boolean {
    return this.bonus;
  }
}
