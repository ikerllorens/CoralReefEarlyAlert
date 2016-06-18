/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register(['@angular/core', '../classes/LoginObject.class/LoginObject.class', '../login-screen.service/login-screen.service', '@angular/router-deprecated', '../main-app.service/main-app.service'], function(exports_1, context_1) {
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
    var core_1, LoginObject_class_1, login_screen_service_1, router_deprecated_1, main_app_service_1;
    var LoginScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LoginObject_class_1_1) {
                LoginObject_class_1 = LoginObject_class_1_1;
            },
            function (login_screen_service_1_1) {
                login_screen_service_1 = login_screen_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (main_app_service_1_1) {
                main_app_service_1 = main_app_service_1_1;
            }],
        execute: function() {
            //TODO: Añadir funciónalidad al estar logeado 
            LoginScreen = (function () {
                function LoginScreen(loginScreenService, router, mainScreenService) {
                    this.loginScreenService = loginScreenService;
                    this.router = router;
                    this.mainScreenService = mainScreenService;
                    //    
                    //    @Output() onLogin = new EventEmitter<LoginResponse>();
                    this.minimumLenUsername = 8;
                    this.minimumLenPassword = 8;
                    this.password = "";
                    this.username = "";
                    this.correctUsername = false;
                    this.emptyUsername = true;
                    this.emptyPassword = true;
                    this.validLoginFields = false;
                    console.info("login-screen module loaded");
                }
                LoginScreen.prototype.ngOnInit = function () {
                    var _this = this;
                    this.onFieldUpdate();
                    setTimeout(function () {
                        console.info("Entrando...");
                        _this.onFieldUpdate();
                    }, 50);
                };
                LoginScreen.prototype.preventCharacters = function (event) {
                    if (event.key == "<" || event.key == ">" || event.key == '"' ||
                        event.key == " " || event.key == "&" || event.key == "|" ||
                        event.key == "#" || event.key == "!" || event.key == "¡" ||
                        event.key == "?" || event.key == "¿" || event.key == "'") {
                        event.preventDefault();
                        console.info("Prohibited character: " + event.key);
                    }
                };
                LoginScreen.prototype.onFieldUpdate = function () {
                    if (this.username.length < this.minimumLenUsername) {
                        this.emptyUsername = true;
                    }
                    else {
                        this.emptyUsername = false;
                    }
                    if (this.password.length < this.minimumLenPassword) {
                        this.emptyPassword = true;
                    }
                    else {
                        this.emptyPassword = false;
                    }
                    if ((this.emptyUsername === false) && (this.emptyPassword === false)) {
                        this.validLoginFields = true;
                    }
                    else {
                        this.validLoginFields = false;
                    }
                };
                LoginScreen.prototype.login = function (event) {
                    var _this = this;
                    console.info("Trying to login...");
                    if (this.username.length < this.minimumLenUsername) {
                        event.preventDefault();
                    }
                    else if (this.password.length < this.minimumLenPassword) {
                        event.preventDefault();
                    }
                    else {
                        var login_object = new LoginObject_class_1.LoginObject(this.username, this.password);
                        this.loginScreenService.tryLogin(login_object).subscribe(function (login_success) { return _this.successfulLoginRequest(login_success); }, function (error) { return console.info(error); });
                    }
                };
                LoginScreen.prototype.successfulLoginRequest = function (login_response) {
                    if (login_response.success == true) {
                        this.mainScreenService.setLoginInfo(login_response);
                        this.router.navigate(['Home']);
                    }
                    else {
                        console.info("Failed login because: " + login_response.reason);
                    }
                };
                LoginScreen = __decorate([
                    core_1.Component({
                        selector: 'login-screen',
                        providers: [],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/login-screen.component/login-screen.component.html'
                    }), 
                    __metadata('design:paramtypes', [login_screen_service_1.LoginScreenService, router_deprecated_1.Router, main_app_service_1.MainScreenService])
                ], LoginScreen);
                return LoginScreen;
            }());
            exports_1("LoginScreen", LoginScreen);
        }
    }
});
//# sourceMappingURL=login-screen.component.js.map