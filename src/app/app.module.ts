import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './core/app.reducer';


import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './components/phone-list-container/phone-list-container.component';
import { PhoneDetailContainerComponent } from './components/phone-detail-container/phone-detail-container.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainerComponent,
    PhoneDetailContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({ appStore: appReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
