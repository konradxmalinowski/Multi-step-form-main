import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.scss']
})
export class AddOnComponent {
  @Input() label: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  @Input() isChecked: boolean = false;
  @Output() handleClick = new EventEmitter<boolean>();

  getIsChecked(): boolean {
    return this.isChecked;
  }

  handleClickCheckbox(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.handleClick.emit(input.checked);
  }
}
