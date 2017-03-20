import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBlhw-CtvQTWKWxUXPDeUyVRD9HvsCK1x4",
  authDomain: "chatapp-57ccf.firebaseapp.com",
  databaseURL: "https://chatapp-57ccf.firebaseio.com",
  storageBucket: "chatapp-57ccf.appspot.com",
  messagingSenderId: "676543682029"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
