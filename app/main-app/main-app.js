/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register(["@angular/core", '@angular/router-deprecated', '../data-card.component/data-card.component', '../login-screen.component/login-screen.component', '../home-screen.component/home-screen.component', '../user-add.component/user-add.component', 'ng2-bootstrap/ng2-bootstrap', '../main-app.service/main-app.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, data_card_component_1, login_screen_component_1, home_screen_component_1, user_add_component_1, ng2_bootstrap_1, main_app_service_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (data_card_component_1_1) {
                data_card_component_1 = data_card_component_1_1;
            },
            function (login_screen_component_1_1) {
                login_screen_component_1 = login_screen_component_1_1;
            },
            function (home_screen_component_1_1) {
                home_screen_component_1 = home_screen_component_1_1;
            },
            function (user_add_component_1_1) {
                user_add_component_1 = user_add_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (main_app_service_1_1) {
                main_app_service_1 = main_app_service_1_1;
            }],
        execute: function() {
            //import { Progressbar } from "ng2-bootstrap/ng2-bootstrap";
            /*
             * Declaración del Component de Angular 2. El selector es el tag HTML que será
             * asociado a este componente. Las diretivas son las clases y/o bibliotecas que
             * son utilizadas, al igual que se importan los tags HTML de dichos componentes.
             */
            Main = (function () {
                function Main(mainScreenService) {
                    var _this = this;
                    this.mainScreenService = mainScreenService;
                    this.title = "Alerta Temprana de Arrecifes de Coral";
                    this.navBarToggle = false;
                    this.loggedIn = false;
                    this.name = "Identifícate";
                    this.menuElements = [
                        { "menuName": "Home", "menuRef": "Home" },
                        { "menuName": "Búsqueda", "menuRef": "Home" },
                        { "menuName": "Away", "menuRef": "Home" },
                        { "menuName": "Agregar Usuario", "menuRef": "UserAdd" }
                    ];
                    //Variables Dropdown
                    this.disabled = false;
                    this.status = { isopen: false };
                    console.info('main-app module loaded');
                    //        mainScreenService.loginInfo.subscribe()
                    this.mainScreenService.loginInfoObservable$.subscribe(function (loginInfo) {
                        _this.logInMode(loginInfo);
                    });
                    this.mainScreenService.loggedInObservable$.subscribe(function (loggedIn) {
                        _this.loggedIn = loggedIn;
                    });
                }
                Main.prototype.ngOnInit = function () {
                    this.mainScreenService.checkLogin();
                };
                //    ngOnInit(    ) {
                //        let id = this.routeParams.get('userType    ');
                //        console.info(    id)
                //        //this.service.getHero(id).then(hero => this.hero = her    o);
                //    }
                Main.prototype.toggleNavbarClick = function () {
                    this.navBarToggle = !this.navBarToggle;
                };
                Main.prototype.logInMode = function (loginInfo) {
                    console.info('Name: ' + loginInfo.name + " with token: " + this.mainScreenService.getLoginInfo().token);
                    this.name = loginInfo.name;
                };
                Main.prototype.logOut = function () {
                    this.loggedIn = false;
                    localStorage.removeItem("token_CEA");
                };
                //Dropdown
                Main.prototype.toggled = function (open) {
                    console.log('Dropdown is now: ', open);
                };
                Main.prototype.toggleDropdown = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    this.status.isopen = !this.status.isopen;
                };
                //    public static serverUrl: String = "http://localhost:8383/CoralReefEarlyAlert/php/"
                Main.serverUrl = "http://localhost/php/";
                Main = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        directives: [data_card_component_1.DataCard, router_deprecated_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS, main_app_service_1.MainScreenService],
                        templateUrl: 'app/main-app/main-app.html'
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_screen_component_1.HomeScreen, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_screen_component_1.LoginScreen },
                        { path: '/userAdd', name: 'UserAdd', component: user_add_component_1.UserAddScreen }
                    ]), 
                    __metadata('design:paramtypes', [main_app_service_1.MainScreenService])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=main-app.js.map