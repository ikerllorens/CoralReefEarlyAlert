import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { MdlModule } from 'angular2-mdl';
import { MdlSelectModule } from '@angular2-mdl-ext/select';
//import { routing } from '../routes/routes';

import { StaticsService } from '../statics.service'

import { MainApp } from '../main-app/main-app.component/main-app.component';
import { HomeComponent } from '../home/home.component/home.component';
import { LoginComponent } from '../login/login.component/login.component';
import { SearchComponent } from '../search/search.component/search.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    MdlSelectModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'search', component: SearchComponent},
      { path: '', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  declarations: [
    MainApp,
    HomeComponent,
    LoginComponent,
    SearchComponent
  ],
  providers: [
    StaticsService,
    FormBuilder
  ],
  bootstrap:    [
    MainApp
  ]
})
export class AppModule { }
