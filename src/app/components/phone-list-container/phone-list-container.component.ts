import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../../services/phones.service';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { INIT, SHOW_LOADING, SELECTED_ITEM } from './../../core/app.actions';
import { AppStore } from './../../core/app.store';

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss'],
  providers: [PhonesService]
})

export class PhoneListContainerComponent implements OnInit {

  appState: Observable<AppStore>;
  appStore: AppStore;

  constructor(private store: Store<AppStore>, private phonesService: PhonesService) {
    this.appState = store.pipe(select('appStore'));
  }

  ngOnInit() {
    this.getPhones();
    this.appState.subscribe((state) => {
      this.appStore = state;
    });
  }

  getPhones() {
    this.store.dispatch({
      type: SHOW_LOADING,
      payload: true
    });
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
    this.store.dispatch({
      type: SHOW_LOADING,
      payload: false
    });
    this.store.dispatch({
      type: INIT,
      payload: data
    });
  }

  setSelectedItem(id) {
    for (const i of this.appStore.items) {
      i.selected = (id === i.id);
      if (i.selected) {
        this.store.dispatch({
          type: SELECTED_ITEM,
          payload: i
        });
      }
    }
  }
}
