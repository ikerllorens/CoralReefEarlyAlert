import { Component, OnInit } from '@angular/core';

import { StaticsService } from '../../statics.service';

import { CheckLoginResponse } from '../../classes/LoginData/LoginData';

@Component({
  selector: 'main-app',
  templateUrl: 'app/main-app/main-app.component/main-app.component.html'
})

export class MainApp implements OnInit {
  public usersName = "";
  public loggedIn: boolean = false
  constructor(private staticsService: StaticsService) {

  }

  public ngOnInit() {
    this.staticsService.loggedInObservable.subscribe(() => {
      this.usersName = this.staticsService.getUsersName();
      this.loggedIn = this.staticsService.getSessionStatus();
    })
    this.staticsService.checkValidLogin()
  }

  public onClickLogoutButton() {
    this.staticsService.logOut();
  }
}
