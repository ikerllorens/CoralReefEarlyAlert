/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {Component} from '@angular/core'

@Component({
    selector: 'login-screen',
    templateUrl: 'app/login-screen.component/login-screen.component.html'
})

export class LoginScreen {
    
    correctUsername = false;
    emptyUsername = true;
    emptyPassword = true;
    constructor() {
        console.info("login-screen module loaded")
        
    }
}