/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component} from "@angular/core";
import {DataCard} from '../data-card.component/data-card.component'
//import {LoginScreen} from '../login-screen.component/login-screen.component'

export class MenuElements {
    menuName: String;
    menuRef: String;
}

@Component({
    selector: 'main-app',
    directives: [DataCard],
    templateUrl: 'app/main-app/main-app.html'
})


export class Main {
    private title: String = "Alerta Temprana de Arrecifes de Coral";
    private menuElements: MenuElements[] = [{ "menuName": "Home", "menuRef": "#" },
        { "menuName": "Away", "menuRef": "#away" }];

    constructor() {
        console.info('main-app module loaded');
    }
}