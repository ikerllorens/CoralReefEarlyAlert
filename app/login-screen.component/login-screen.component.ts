/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {Component} from '@angular/core'
import {LoginObject, LoginResponse} from '../classes/LoginObject.class/LoginObject.class'
import { LoginScreenService } from '../login-screen.service/login-screen.service';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';


//TODO: Añadir funciónalidad al estar logeado 

@Component({
    selector: 'login-screen',
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/login-screen.component/login-screen.component.html'
})

export class LoginScreen {

    minimumLenUsername: number = 8;
    minimumLenPassword: number = 8;

    password: String = "";
    username: String = "";

    correctUsername = false;
    emptyUsername = true;
    emptyPassword = true;

    validLogin = false;


    constructor(private loginScreenService: LoginScreenService, private router: Router) {
        console.info("login-screen module loaded");
    }

    preventCharacters(event) {
        if (event.key == "<" || event.key == ">" || event.key == '"' ||
            event.key == " " || event.key == "&" || event.key == "|" ||
            event.key == "#" || event.key == "!" || event.key == "¡" ||
            event.key == "?" || event.key == "¿" || event.key == "'") {
            event.preventDefault();
            console.info("Prohibited character: " + event.key)
        }
    }

    onFieldUpdate(event) {
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
            this.validLogin = true;
        } else {
            this.validLogin = false;
        }
    }

    login(event) {
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

    successfulLoginRequest(login_response: LoginResponse) {
        if (login_response.success == true) {
            console.info(login_response.name)
            localStorage.setItem("token", login_response.name)
            this.router.navigate(['Home', { userType: login_response.userType }]) 
       } else {
            console.info("Failed login because: " + login_response.reason)
        }
    }
}