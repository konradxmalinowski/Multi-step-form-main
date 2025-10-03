import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnChanges {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() price: string = '';
  @Input() bonus: boolean = false;
  @Input() isChecked: boolean = false;

  hasBlueBorder: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isChecked']) {
      this.hasBlueBorder = changes['isChecked'].currentValue;
    }

    if (changes['price']) {
      this.price = changes['price'].currentValue;
    }
  }

}
