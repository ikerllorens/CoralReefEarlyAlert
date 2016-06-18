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
System.register(['@angular/core', '@angular/http', 'rxjs/Subject', 'rxjs/Observable', '../rxjs-operators', '../main-app/main-app'], function(exports_1, context_1) {
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
    var core_1, http_1, Subject_1, Observable_1, main_app_1;
    var MainScreenService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (main_app_1_1) {
                main_app_1 = main_app_1_1;
            }],
        execute: function() {
            MainScreenService = (function () {
                function MainScreenService(http) {
                    var _this = this;
                    this.http = http;
                    this.loggedInObservable = new Subject_1.Subject();
                    this.loginInfoObservable = new Subject_1.Subject();
                    this.loggedInObservable$ = this.loggedInObservable.asObservable();
                    this.loginInfoObservable$ = this.loginInfoObservable.asObservable();
                    this.checkLoginObservable$ = new Observable_1.Observable();
                    this.valid_tokenObservable$ = new Observable_1.Observable();
                    this.loggedInObservable$.subscribe(function (loggedIn) { return _this.loggedIn = loggedIn; });
                    this.loginInfoObservable$.subscribe(function (loginInfo) { return _this.loginInfo = loginInfo; });
                    //        this.checkLoginObservable$.sub        scribe(
                    //            loginInfo => this.fetchUserInfo(loginInfo.s        uccess)
                    //                )
                    //        this.valid_tokenObservable$.sub        scribe(
                    //            loginInfo => this.loginInfoObservable.next(log        inInfo)
                    //        )
                }
                MainScreenService.prototype.setLoginInfo = function (loginInfo) {
                    localStorage.setItem("token_CEA", loginInfo.token);
                    this.loginInfoObservable.next(loginInfo);
                    this.loggedInObservable.next(true);
                };
                MainScreenService.prototype.checkLogin = function () {
                    var _this = this;
                    var token = localStorage.getItem("token_CEA");
                    //console.info("token: " + token)
                    if (token != null) {
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var options = new http_1.RequestOptions({ headers: headers });
                        this.token = token;
                        var body = { "token": this.token };
                        //console.log('Request: ' + JSON.stringify(body))
                        this.http.post(main_app_1.Main.serverUrl + 'checklog.php', JSON.stringify(body), options)
                            .map(this.extractData)
                            .subscribe(function (loginInfo) { return _this.fetchUserInfo(loginInfo.success); });
                    }
                };
                MainScreenService.prototype.fetchUserInfo = function (valid_token) {
                    var _this = this;
                    if (valid_token) {
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var options = new http_1.RequestOptions({ headers: headers });
                        var body = { "token": this.token };
                        console.log('Request: ' + JSON.stringify(body));
                        this.http.post(main_app_1.Main.serverUrl + 'tokenInfo.php', JSON.stringify(body), options)
                            .map(this.extractData)
                            .subscribe(function (loginInfo) { return _this.loginInfoObservable.next(loginInfo); });
                        this.loggedInObservable.next(true);
                    }
                    else {
                        this.loggedInObservable.next(false);
                    }
                };
                MainScreenService.prototype.extractData = function (res) {
                    var responseJSON = res.json();
                    console.info(res.text());
                    return responseJSON;
                };
                MainScreenService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MainScreenService);
                return MainScreenService;
            }());
            exports_1("MainScreenService", MainScreenService);
        }
    }
});
//# sourceMappingURL=main-app.service.js.map