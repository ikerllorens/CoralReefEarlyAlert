/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var data_card_component_1 = require('../data-card.component/data-card.component');
var login_screen_component_1 = require('../login-screen.component/login-screen.component');
var MenuElements = (function () {
    function MenuElements() {
    }
    return MenuElements;
}());
exports.MenuElements = MenuElements;
var Main = (function () {
    function Main() {
        this.title = "Alerta Temprana de Arrecifes de Coral";
        this.menuElements = [{ "menuName": "Home", "menuRef": "#" },
            { "menuName": "Away", "menuRef": "#away" }];
        console.info('main-app module loaded');
    }
    Main = __decorate([
        core_1.Component({
            selector: 'main-app',
            directives: [data_card_component_1.DataCard, login_screen_component_1.LoginScreen],
            templateUrl: 'app/main-app/main-app.html'
        })
    ], Main);
    return Main;
}());
exports.Main = Main;
