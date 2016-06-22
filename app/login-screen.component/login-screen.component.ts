/* 
 * Copyright (C) 2016 ikerllorens
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {Component, OnInit } from '@angular/core'
import {LoginObject, LoginResponse} from '../classes/LoginObject.class/LoginObject.class'
import { LoginScreenService } from '../login-screen.service/login-screen.service';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {MainScreenService} from '../main-app.service/main-app.service'


//TODO: Añadir funciónalidad al estar logeado 

@Component({
    selector: 'login-screen',
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/login-screen.component/login-screen.component.html'
})

export class LoginScreen implements OnInit {
    //    
    //    @Output() onLogin = new EventEmitter<LoginResponse>();

    minimumLenUsername: number = 8;
    minimumLenPassword: number = 8;

    password: String = "";
    username: String = "";

    correctUsername = false;
    emptyUsername = true;
    emptyPassword = true;

    validLoginFields = false;


    constructor(private loginScreenService: LoginScreenService, private router: Router, private mainScreenService: MainScreenService) {
        console.info("login-screen module loaded");
    }

    ngOnInit() {
        this.onFieldUpdate()

        setTimeout(() => {
            console.info("Entrando...")
            this.onFieldUpdate()
        }, 50);

    }

    preventCharacters(event): void {
        if (event.key == "<" || event.key == ">" || event.key == '"' ||
            event.key == " " || event.key == "&" || event.key == "|" ||
            event.key == "#" || event.key == "!" || event.key == "¡" ||
            event.key == "?" || event.key == "¿" || event.key == "'") {
            event.preventDefault();
            console.info("Prohibited character: " + event.key)
        }
    }

    onFieldUpdate(): void {
        if (this.username.length < this.minimumLenUsername) {
            this.emptyUsername = true
        } else {
            this.emptyUsername = false
        }

        if (this.password.length < this.minimumLenPassword) {
            this.emptyPassword = true
        } else {
            this.emptyPassword = false
        }

        if ((this.emptyUsername === false) && (this.emptyPassword === false)) {
            this.validLoginFields = true;
        } else {
            this.validLoginFields = false;
        }
    }

    login(event): void {
        console.info("Trying to login...")

        if (this.username.length < this.minimumLenUsername) {
            event.preventDefault();
        } else if (this.password.length < this.minimumLenPassword) {
            event.preventDefault();
        } else {
            var login_object = new LoginObject(this.username, this.password)
            this.loginScreenService.tryLogin(login_object).subscribe(login_success => this.successfulLoginRequest(login_success), error => console.info(<any>error));
        }
    }

    successfulLoginRequest(login_response: LoginResponse): void {
        if (login_response.success == true) {
            this.mainScreenService.setLoginInfo(login_response)
            this.router.navigate(['Home'])
        } else {
            console.info("Failed login because: " + login_response.reason)
        }
    }
}