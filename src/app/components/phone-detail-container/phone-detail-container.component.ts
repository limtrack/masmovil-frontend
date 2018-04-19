import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-phone-detail-container',
  templateUrl: './phone-detail-container.component.html',
  styleUrls: ['./phone-detail-container.component.scss']
})
export class PhoneDetailContainerComponent implements OnChanges {

  constructor() { }

  @Input() item = {};

  isEmpty: Boolean = true;

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const currentItem = changes.item.currentValue;
    if (typeof currentItem === 'object' && Object.keys(currentItem).length > 0) {
      this.item = currentItem;
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }
}
