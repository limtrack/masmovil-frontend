import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../../services/phones.service';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { INIT, SHOW_LOADING, SELECTED_ITEM } from './../../reducers/app.reducer';
import { AppStore } from './../../reducers/app.store';
import { AppState } from './../../reducers/app.state';

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss'],
  providers: [PhonesService]
})

export class PhoneListContainerComponent implements OnInit {

  dataObservable: Observable<AppStore>;
  data: AppStore;

  constructor(private store: Store<AppState>, private phonesService: PhonesService) {
    this.dataObservable = this.store.select(state => state.appStore);
  }

  ngOnInit() {
    this.getPhones();
    this.dataObservable.subscribe((state) => {
      this.data = state;
    });
  }

  getPhones() {
    this.storeDispatch(SHOW_LOADING, true);
    this.phonesService.getPhones().
      subscribe((res) => {
        this.checkResponseServer(res);
      })
  }

  checkResponseServer(res) {
    let data = (res._body && res.status && res.status === 200)
      ? JSON.parse(res._body)
      : [];
    this.setResponseData(data);
  }

  setResponseData(data) {
    this.storeDispatch(SHOW_LOADING, false);
    this.storeDispatch(INIT, data);
  }

  setSelectedItem(id) {
    for (const i of this.data.items) {
      i.selected = (id === i.id);
      if (i.selected) {
        this.store.dispatch({
          type: SELECTED_ITEM,
          payload: i
        });
      }
    }
  }

  storeDispatch(type, payload) {
    this.store.dispatch({
      type: type,
      payload: payload
    });
  }
}
