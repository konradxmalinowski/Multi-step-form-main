import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Output() handleChange = new EventEmitter<string>();

  handleChangeValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.handleChange.emit(input.value);
  }
}
