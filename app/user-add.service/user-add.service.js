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
System.register(['@angular/core', '@angular/http', '../classes/UserAddObject.class/UserAddObject.class', '../main-app/main-app', 'rxjs/Subject', '../rxjs-operators'], function(exports_1, context_1) {
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
    var core_1, http_1, UserAddObject_class_1, main_app_1, Subject_1;
    var UserAddService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (UserAddObject_class_1_1) {
                UserAddObject_class_1 = UserAddObject_class_1_1;
            },
            function (main_app_1_1) {
                main_app_1 = main_app_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (_1) {}],
        execute: function() {
            UserAddService = (function () {
                function UserAddService(http) {
                    this.http = http;
                    this.userAddObservable = new Subject_1.Subject();
                    this.userAddObservable$ = this.userAddObservable.asObservable();
                }
                UserAddService.prototype.addUser = function (username, password, name, surname, userType) {
                    var _this = this;
                    var newUser = new UserAddObject_class_1.UserAddObject(username, password, name, surname, userType);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var url = main_app_1.Main.serverUrl + '';
                    this.http.post(url, JSON.stringify(newUser), options)
                        .map(this.extractData)
                        .subscribe(function (userAddResponse) {
                        _this.userAddObservable.next(userAddResponse);
                    });
                };
                UserAddService.prototype.extractData = function (res) {
                    var responseJSON = res.json();
                    return responseJSON;
                };
                UserAddService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserAddService);
                return UserAddService;
            }());
            exports_1("UserAddService", UserAddService);
        }
    }
});
//# sourceMappingURL=user-add.service.js.map