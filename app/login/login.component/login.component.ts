import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'

import { MdlSnackbarService } from 'angular2-mdl'

import { LoginService } from '../login.service/login.service';
import { StaticsService } from '../../statics.service'

import { LoginInformation, LoginResponse } from '../../classes/LoginData/LoginData';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component/login.component.html',
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  public form: FormGroup;
  public username = new FormControl('', Validators.required);
  public password = new FormControl('', Validators.required);

  public constructor(private fb: FormBuilder, private loginService: LoginService, private mdlSnackbarService: MdlSnackbarService, private staticsService: StaticsService, private router: Router) {

  }

  public ngOnInit() {
    this.form = this.fb.group({
      'username': this.username,
      'password': this.password
    })
  }

  public login(){
    this.loginService.login(this.form.getRawValue() as LoginInformation).subscribe((response: LoginResponse) => {
      if(response.success) {
        this.staticsService.setUserInfo(response.token, response.name, response.userType);
        this.staticsService.logIn();
        this.router.navigate(['/'])
      } else {
        this.staticsService.logOut();
        this.mdlSnackbarService.showSnackbar({
          message:'Usuario o contraseña incorrectos',
          action:{
            handler:()=>{
              //this.mdlSnackbarService.showToast('You hit the ok Button');
            },
            text: 'OK'
          }
        });
      }
    });
  }

}
