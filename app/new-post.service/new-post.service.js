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
System.register(['@angular/core', '@angular/http', '../main-app/main-app', '../main-app.service/main-app.service', 'rxjs/Subject', '../rxjs-operators'], function(exports_1, context_1) {
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
    var core_1, http_1, main_app_1, main_app_service_1, Subject_1;
    var NewPostService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (main_app_1_1) {
                main_app_1 = main_app_1_1;
            },
            function (main_app_service_1_1) {
                main_app_service_1 = main_app_service_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (_1) {}],
        execute: function() {
            NewPostService = (function () {
                function NewPostService(http, mainScreenService) {
                    this.http = http;
                    this.coralTypesObservable = new Subject_1.Subject();
                    this.coralTypesObservable$ = this.coralTypesObservable.asObservable();
                }
                //TODO: hacer prototipo de funcion en MainScreenService
                NewPostService.prototype.extractData = function (res) {
                    console.info('Response: ' + res.text());
                    var responseJSON = res.json();
                    return responseJSON;
                };
                NewPostService.prototype.getCoralTypes = function () {
                    var _this = this;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(main_app_1.Main.serverUrl + 'getTipCorales.php', options).map(this.extractData).subscribe(function (CoralTypes) {
                        if (CoralTypes.success) {
                            //console.info('CoralTypes.data: ' + CoralTypes.datos[0].text)
                            _this.coralTypesObservable.next(CoralTypes);
                        }
                        else {
                            console.error("Could not fetch CoralTypes because: " + CoralTypes.reason);
                        }
                    });
                };
                NewPostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, main_app_service_1.MainScreenService])
                ], NewPostService);
                return NewPostService;
            }());
            exports_1("NewPostService", NewPostService);
        }
    }
});
//# sourceMappingURL=new-post.service.js.map