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
System.register(['@angular/core', '../data-card.component/data-card.component', '../home-screen.service/home-screen.service'], function(exports_1, context_1) {
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
    var core_1, data_card_component_1, home_screen_service_1;
    var HomeScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_card_component_1_1) {
                data_card_component_1 = data_card_component_1_1;
            },
            function (home_screen_service_1_1) {
                home_screen_service_1 = home_screen_service_1_1;
            }],
        execute: function() {
            HomeScreen = (function () {
                function HomeScreen(homeScreenService) {
                    var _this = this;
                    this.homeScreenService = homeScreenService;
                    this.tableRows = [];
                    this.homeScreenService.postsTableObservable$.subscribe(function (tableData) {
                        _this.tableRows = tableData.datos;
                    });
                }
                HomeScreen.prototype.ngOnInit = function () {
                    this.homeScreenService.getPosts();
                };
                HomeScreen = __decorate([
                    core_1.Component({
                        selector: 'home-screen',
                        directives: [data_card_component_1.DataCard],
                        providers: [home_screen_service_1.HomeScreenService],
                        templateUrl: 'app/home-screen.component/home-screen.component.html'
                    }), 
                    __metadata('design:paramtypes', [home_screen_service_1.HomeScreenService])
                ], HomeScreen);
                return HomeScreen;
            }());
            exports_1("HomeScreen", HomeScreen);
        }
    }
});
//# sourceMappingURL=home-screen.component.js.map