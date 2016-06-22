/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit} from "@angular/core";

//import {ROUTER_DIRECTIVES, Router} from '@angular/router';
/*
 * Pronto será depreciado el Router de Angular 2, no hay aún algún anuncio
 * oficial ni documentación del nuevo Router
 */
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {DataCard} from '../data-card.component/data-card.component';
import {LoginScreen} from '../login-screen.component/login-screen.component';
import {HomeScreen} from '../home-screen.component/home-screen.component';
import {UserAddScreen} from '../user-add.component/user-add.component';
import {NewPostScreen} from '../new-post.component/new-post.component'

import {MenuElements} from '../classes/MenuElements.class/MenuElements.class';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {MainScreenService} from '../main-app.service/main-app.service'
import {LoginResponse} from '../classes/LoginObject.class/LoginObject.class'
//import { Progressbar } from "ng2-bootstrap/ng2-bootstrap";



/*
 * Declaración del Component de Angular 2. El selector es el tag HTML que será
 * asociado a este componente. Las diretivas son las clases y/o bibliotecas que
 * son utilizadas, al igual que se importan los tags HTML de dichos componentes.
 */
@Component({
    selector: 'main-app',
    directives: [DataCard, ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, MainScreenService],
    templateUrl: 'app/main-app/main-app.html'
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeScreen, useAsDefault: true },
    { path: '/login', name: 'Login', component: LoginScreen },
    { path: '/userAdd', name: 'UserAdd', component: UserAddScreen },
    { path: '/newPost', name: 'NewPost', component: NewPostScreen}
])

export class Main implements OnInit {
    //    public static serverUrl: String = "http://localhost:8383/CoralReefEarlyAlert/php/"
    public static serverUrl: String = "http://localhost/php/"
    private title: String = "Alerta Temprana de Arrecifes de Coral";
    private navBarToggle: Boolean = false;

    private loggedIn: Boolean = false;
    private name: String = "Identifícate"


    private menuElements: MenuElements[] = [
        { "menuName": "Home", "menuRef": "Home" },
        { "menuName": "Búsqueda", "menuRef": "Home" },
        { "menuName": "Registrar Observación", "menuRef": "NewPost" },
        { "menuName": "Agregar Usuario", "menuRef": "UserAdd" },
    ];

    //Variables Dropdown
    private disabled: boolean = false;
    private status: { isopen: boolean } = { isopen: false };



    constructor(private mainScreenService: MainScreenService) {
        console.info('main-app module loaded');

        
        //        mainScreenService.loginInfo.subscribe()
        this.mainScreenService.loginInfoObservable$.subscribe(
            loginInfo => {
                this.logInMode(loginInfo)
            }
        )

        this.mainScreenService.loggedInObservable$.subscribe(
            loggedIn => {

                this.loggedIn = loggedIn
            }
        )
    }

    ngOnInit() {
        this.mainScreenService.checkLogin()
    }

    //    ngOnInit(    ) {
    //        let id = this.routeParams.get('userType    ');
    //        console.info(    id)
    //        //this.service.getHero(id).then(hero => this.hero = her    o);
    //    }

    toggleNavbarClick(): void {
        this.navBarToggle = !this.navBarToggle;
    }

    logInMode(loginInfo: LoginResponse) {
        console.info('Name: ' + loginInfo.name + " with token: " + this.mainScreenService.getLoginInfo().token)
        this.name = loginInfo.name
    }

    logOut() {
        this.loggedIn = false
        localStorage.removeItem("token_CEA")
    }
    //Dropdown

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }



}