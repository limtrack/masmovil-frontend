import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../../services/phones.service';

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss'],
  providers: [PhonesService]
})
export class PhoneListContainerComponent implements OnInit {

  private items: Array<any> = [];
  private showLoading: Boolean = true;
  private selectedItem = {};

  constructor(private phonesService: PhonesService) { }

  ngOnInit() {
    this.getPhones();
  }

  getPhones() {
    this.showLoading = true;
    this.phonesService.getPhones().
      subscribe((res) => {
        this.checkResponseServer(res);
      })
  }

  checkResponseServer(res) {
    let data = (res._body && res.status && res.status === 200)
      ? JSON.parse(res._body)
      : [];
    this.setResponseItems(data);
  }

  setResponseItems(data) {
    this.items = data;
    this.showLoading = false;
  }

  setSelectedItem(id) {
    for (const i of this.items) {
      i.selected = (id === i.id);
      if (i.selected) {
        this.selectedItem = i;
      }
    }
  }
}
