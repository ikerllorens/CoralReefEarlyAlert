import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdlModule } from 'angular2-mdl'
import {FIREBASE_PROVIDERS,
  defaultFirebase,
  AngularFire,
  AuthMethods,
  AuthProviders,
  firebaseAuthConfig,
  AngularFireModule } from 'angularfire2';

import { FormsModule } from '@angular/forms';

import { routing } from '../routes/routes';

import { LoginScreen } from  '../login/login.component/login.component';
import { MainApp }  from '../main-app.component/main-app.component';
import { HomeScreen } from '../home/home.component/home.component'
import { ChatScreen } from '../chat/chat.component/chat.component'
import { ConversationsScreen} from '../chat/conversations.component/conversations.component'

export const firebaseConfig = {
  apiKey: "AIzaSyAHMAeimjDmJLRbj7dZSpeUk-uu8NTuXDg",
  authDomain: "abogadonow-1383.firebaseapp.com",
  databaseURL: "https://abogadonow-1383.firebaseio.com",
  storageBucket: "abogadonow-1383.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    MdlModule ,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  declarations: [
    LoginScreen,
    MainApp,
    HomeScreen,
    ChatScreen,
    ConversationsScreen
  ],
  bootstrap:    [
    MainApp
  ]
})
export class AppModule { }
