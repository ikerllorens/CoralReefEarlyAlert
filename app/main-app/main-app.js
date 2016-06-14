/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register(["@angular/core", '@angular/router-deprecated', '../data-card.component/data-card.component', '../login-screen.component/login-screen.component', '../home-screen.component/home-screen.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, data_card_component_1, login_screen_component_1, home_screen_component_1;
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
            }],
        execute: function() {
            /*
             * Declaración del Component de Angular 2. El selector es el tag HTML que será
             * asociado a este componente. Las diretivas son las clases y/o bibliotecas que
             * son utilizadas, al igual que se importan los tags HTML de dichos componentes.
             */
            Main = (function () {
                function Main() {
                    this.title = "Alerta Temprana de Arrecifes de Coral";
                    this.navBarToggle = false;
                    this.menuElements = [
                        { "menuName": "Home", "menuRef": "Home" },
                        { "menuName": "Búsqueda", "menuRef": "Home" },
                    ];
                    console.info('main-app module loaded');
                }
                Main.prototype.toggleNavbarClick = function () {
                    this.navBarToggle = !this.navBarToggle;
                };
                //    public static serverUrl: String = "http://localhost:8383/CoralReefEarlyAlert/php/"
                Main.serverUrl = "http://localhost:8888/php/";
                Main = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        directives: [data_card_component_1.DataCard, router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS],
                        templateUrl: 'app/main-app/main-app.html'
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_screen_component_1.HomeScreen },
                        { path: '/login', name: 'Login', component: login_screen_component_1.LoginScreen }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=main-app.js.map