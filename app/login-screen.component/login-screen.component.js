/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var LoginScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoginScreen = (function () {
                function LoginScreen() {
                    this.correctUsername = false;
                    this.emptyUsername = true;
                    this.emptyPassword = true;
                    console.info("login-screen module loaded");
                }
                LoginScreen = __decorate([
                    core_1.Component({
                        selector: 'login-screen',
                        templateUrl: 'app/login-screen.component/login-screen.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginScreen);
                return LoginScreen;
            }());
            exports_1("LoginScreen", LoginScreen);
        }
    }
});
//# sourceMappingURL=login-screen.component.js.map