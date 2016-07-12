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
System.register(['@angular/core', '../main-app.service/main-app.service', '../stats-screen.service/stats-screen.service'], function(exports_1, context_1) {
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
    var core_1, main_app_service_1, stats_screen_service_1;
    var StatsScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (main_app_service_1_1) {
                main_app_service_1 = main_app_service_1_1;
            },
            function (stats_screen_service_1_1) {
                stats_screen_service_1 = stats_screen_service_1_1;
            }],
        execute: function() {
            StatsScreen = (function () {
                function StatsScreen(mainScreenService, statsScreenService) {
                    var _this = this;
                    this.mainScreenService = mainScreenService;
                    this.statsScreenService = statsScreenService;
                    this.imagePath = 'img/semaforo_neutro.png';
                    this.statsScreenService.statsObservable$.subscribe(function (stats) {
                        _this.userPosts = stats.userPosts;
                        _this.totalPosts = stats.totalPosts;
                        switch (stats.status) {
                            case 0:
                                _this.imagePath = 'img/semaforo_verde.png';
                                break;
                            case 1:
                                _this.imagePath = 'img/semaforo_amarillo.png';
                                break;
                            case 2:
                                _this.imagePath = 'img/semaforo_rojo.png';
                                break;
                            default:
                                _this.imagePath = 'img/semaforo_neutro.png';
                                break;
                        }
                    });
                }
                StatsScreen.prototype.ngOnInit = function () {
                    this.statsScreenService.getStats(this.mainScreenService.getLoginInfo().token);
                };
                StatsScreen = __decorate([
                    core_1.Component({
                        selector: 'stats-screen',
                        templateUrl: 'app/stats-screen.component/stats-screen.component.html',
                        providers: [stats_screen_service_1.StatsScreenService]
                    }), 
                    __metadata('design:paramtypes', [main_app_service_1.MainScreenService, stats_screen_service_1.StatsScreenService])
                ], StatsScreen);
                return StatsScreen;
            }());
            exports_1("StatsScreen", StatsScreen);
        }
    }
});
//# sourceMappingURL=stats-screen.component.js.map