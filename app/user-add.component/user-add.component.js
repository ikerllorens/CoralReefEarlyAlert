/*
 * Copyright (C) 2016 ikerllorens
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
System.register(['@angular/core', '@angular/router-deprecated', '../main-app.service/main-app.service', '../user-add.service/user-add.service', '@angular/common', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, main_app_service_1, user_add_service_1, common_1, ng2_bootstrap_1;
    var UserAddScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (main_app_service_1_1) {
                main_app_service_1 = main_app_service_1_1;
            },
            function (user_add_service_1_1) {
                user_add_service_1 = user_add_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            UserAddScreen = (function () {
                function UserAddScreen(mainScreenService, userAddService, router) {
                    var _this = this;
                    this.mainScreenService = mainScreenService;
                    this.userAddService = userAddService;
                    this.router = router;
                    this.username = "";
                    this.password = "";
                    this.name = "";
                    this.surname = "";
                    this.userType = 1;
                    /*
                     * Variable de control que evita que se pueda realizar alguna acción en lo que se
                     * comprueba si el usuario es administrador con el servidor. Est variable cambiara a true
                     * en caso de que al recibir la respuesta del servidor el usuario sea administrador
                     * de otro modo se le redirecciona a Home
                     */
                    this.editing = false;
                    console.info("user-add module loaded");
                    this.userAddService.userAddObservable$.subscribe(function (userAddResponse) { return _this.userAdded(userAddResponse); });
                    // TODO: Subscribir a main screen Service
                }
                UserAddScreen.prototype.ngOnInit = function () {
                    var loginInfo = this.mainScreenService.getLoginInfo();
                    if (loginInfo.userType == 2) {
                        console.info("Admin detected");
                        this.editing = true;
                    }
                    else {
                        console.info("Not Logged in as Admin");
                        this.editing = false;
                    }
                };
                UserAddScreen.prototype.addUserButtonClicked = function (event) {
                    if (this.mainScreenService.getLoginInfo().userType == 2) {
                        //this.router.navigate(['Home'])
                        this.userAddService.addUser(this.username, this.password, this.name, this.surname, this.userType);
                    }
                    else {
                        console.info("Not Logged in as Admin");
                        event.preventDefault();
                    }
                };
                UserAddScreen.prototype.userAdded = function (userAddResponse) {
                    if (userAddResponse.success) {
                    }
                    else {
                        console.info("Failed to add user because: " + userAddResponse.reason);
                    }
                };
                UserAddScreen = __decorate([
                    core_1.Component({
                        selector: 'user-add',
                        providers: [user_add_service_1.UserAddService],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.BUTTON_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_bootstrap_1.AlertComponent],
                        templateUrl: 'app/user-add.component/user-add.component.html'
                    }), 
                    __metadata('design:paramtypes', [main_app_service_1.MainScreenService, user_add_service_1.UserAddService, router_deprecated_1.Router])
                ], UserAddScreen);
                return UserAddScreen;
            }());
            exports_1("UserAddScreen", UserAddScreen);
        }
    }
});
//# sourceMappingURL=user-add.component.js.map