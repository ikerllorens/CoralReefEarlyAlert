import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { MdlModule } from 'angular2-mdl';





//import { routing } from '../routes/routes';

import { MainApp } from '../main-app/main-app.component/main-app.component'

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    
  ],
  declarations: [
    MainApp
  ],
  bootstrap:    [
    MainApp
  ]
})
export class AppModule { }
