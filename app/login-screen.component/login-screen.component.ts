/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {Component} from '@angular/core'
import {LoginObject, LoginResponse} from '../classes/LoginObject.class/LoginObject.class'
import { LoginScreenService } from '../login-screen.service/login-screen.service';

@Component({
    selector: 'login-screen',
    providers: [],
    templateUrl: 'app/login-screen.component/login-screen.component.html'
})

export class LoginScreen {

    password: String = "";
    username: String = "";

    correctUsername = false;
    emptyUsername = true;
    emptyPassword = true;
    
    private loginScreenService: LoginScreenService;

    constructor(loginScreenService: LoginScreenService) {
        this.loginScreenService = loginScreenService
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
        if (this.username.length < 8) {
            this.emptyUsername = true
        } else {
            this.emptyUsername = false
        }

        if (this.password.length < 8) { 
            this.emptyPassword = true
        } else {
            this.emptyPassword = false
        }        
        //console.info("Password: " + this.password + "\n UserName: " + this.username)
    }
    
    login() {
        console.info("Trying to login...")
        var login_object = new LoginObject(this.username, this.password)
        this.loginScreenService.tryLogin(login_object).subscribe(
            login_success => this.successfulLogin(login_success),
            error => console.info(<any>error));  
    }
    
    successfulLogin(login_success: LoginResponse) {
        console.info(login_success.reason)
    }
}