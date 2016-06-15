/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component} from "@angular/core";
//import {ROUTER_DIRECTIVES, Router} from '@angular/router';
/*
 * Pronto será depreciado el Router de Angular 2, no hay aún algún anuncio
 * oficial ni documentación de el nuevo Router
 * 
 */


import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DataCard} from '../data-card.component/data-card.component';
import {LoginScreen} from '../login-screen.component/login-screen.component';
import {HomeScreen} from '../home-screen.component/home-screen.component';
import {MenuElements} from '../classes/MenuElements.class/MenuElements.class'
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
//import { Progressbar } from "ng2-bootstrap/ng2-bootstrap";



/*
 * Declaración del Component de Angular 2. El selector es el tag HTML que será
 * asociado a este componente. Las diretivas son las clases y/o bibliotecas que
 * son utilizadas, al igual que se importan los tags HTML de dichos componentes.
 */
@Component({
    selector: 'main-app',
    directives: [DataCard, ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    templateUrl: 'app/main-app/main-app.html'
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeScreen, useAsDefault: true },
    { path: '/login', name: 'Login', component: LoginScreen }
])

export class Main {
    //    public static serverUrl: String = "http://localhost:8383/CoralReefEarlyAlert/php/"
    public static serverUrl: String = "http://localhost:8888/php/"
    private title: String = "Alerta Temprana de Arrecifes de Coral";
    private navBarToggle: Boolean = false;

    private menuElements: MenuElements[] = [
        { "menuName": "Home", "menuRef": "Home" },
        { "menuName": "Búsqueda", "menuRef": "Home" },
    ];

    constructor() {
        console.info('main-app module loaded');
        }

//    ngOnInit(    ) {
//        let id = this.routeParams.get('userType    ');
//        console.info(    id)
//        //this.service.getHero(id).then(hero => this.hero = her    o);
//    }

    toggleNavbarClick() {
        this.navBarToggle = !this.navBarToggle;
    }


    //Dropdown

    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };
    public items: Array<string> = ['The first choice!',
        'And another choice for you.', 'but wait! A third!'];

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}