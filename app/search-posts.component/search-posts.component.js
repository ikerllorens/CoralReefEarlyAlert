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
System.register(['@angular/core', 'ng2-bootstrap/ng2-bootstrap', '../main-app.service/main-app.service', '../search-posts.service/search-posts.service', 'ng2-select/ng2-select'], function(exports_1, context_1) {
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
    var core_1, ng2_bootstrap_1, main_app_service_1, search_posts_service_1, ng2_select_1;
    var SearchPostsScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (main_app_service_1_1) {
                main_app_service_1 = main_app_service_1_1;
            },
            function (search_posts_service_1_1) {
                search_posts_service_1 = search_posts_service_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            }],
        execute: function() {
            SearchPostsScreen = (function () {
                function SearchPostsScreen(searchPostsService, mainScreenService) {
                    var _this = this;
                    this.searchPostsService = searchPostsService;
                    this.mainScreenService = mainScreenService;
                    this.date = new Date('2016-06-30 15:56:14');
                    this.tableRows = [];
                    this.coralTypes = [];
                    console.info('search-posts module loaded');
                    this.searchPostsService.coralTypesObservable$.subscribe(function (items) {
                        _this.coralTypes = items.datos;
                    });
                }
                SearchPostsScreen.prototype.ngOnInit = function () {
                    this.searchPostsService.getCoralTypes();
                    this.populateTable();
                };
                SearchPostsScreen.prototype.refreshValueType = function (event) {
                };
                SearchPostsScreen.prototype.populateTable = function () {
                    this.tableRows.push({
                        "postDate": new Date('2016-06-30 15:56:14'),
                        "coralType": "Coral de Fuego",
                        "coralSpecies": "Coralis Fueguis",
                        "sector": "Akumal Norte",
                        "subsector": "Sector1",
                        "diseases": [
                            {
                                "name": "gripe corálica",
                                "percentage": 23
                            },
                            {
                                "name": "viruela corálica",
                                "percentage": 43
                            },
                            {
                                "name": "posesión diabólica corálica",
                                "percentage": 23
                            },
                            {
                                "name": "banda roja",
                                "percentage": 23
                            }
                        ],
                        "bleaching": [
                            {
                                "name": "parcial",
                                "percentage": 21
                            }
                        ],
                        "photos": ["hello", "nunca"],
                        "comments": "hasta crees"
                    });
                    this.tableRows.push({
                        "postDate": new Date('2016-06-28 15:56:14'),
                        "coralType": "Coral de Fuego",
                        "coralSpecies": "Coralis Fueguis",
                        "sector": "Akumal Norte",
                        "subsector": "Sector1",
                        "diseases": [],
                        "bleaching": [],
                        "photos": ["hello", "nunca"],
                        "comments": "hasta crees"
                    });
                    this.tableRows.push({
                        "postDate": new Date('2016-06-29 15:56:14'),
                        "coralType": "Cerebro",
                        "coralSpecies": "Cerebris Tontus",
                        "sector": "Akumal Norte",
                        "subsector": "Sector1",
                        "diseases": [],
                        "bleaching": [],
                        "photos": ["hello", "nunca"],
                        "comments": "hasta crees"
                    });
                    this.tableRows.push({
                        "postDate": new Date('2016-06-20 15:56:14'),
                        "coralType": "Coral de Fuego",
                        "coralSpecies": "Coralis Fueguis",
                        "sector": "Akumal Norte",
                        "subsector": "Sector1",
                        "diseases": [],
                        "bleaching": [],
                        "photos": ["hello", "nunca"],
                        "comments": "hasta crees"
                    });
                };
                SearchPostsScreen = __decorate([
                    core_1.Component({
                        selector: "search-posts",
                        providers: [search_posts_service_1.SearchPostsService],
                        directives: [ng2_bootstrap_1.PAGINATION_DIRECTIVES, ng2_select_1.SELECT_DIRECTIVES],
                        templateUrl: 'app/search-posts.component/search-posts.component.html'
                    }), 
                    __metadata('design:paramtypes', [search_posts_service_1.SearchPostsService, main_app_service_1.MainScreenService])
                ], SearchPostsScreen);
                return SearchPostsScreen;
            }());
            exports_1("SearchPostsScreen", SearchPostsScreen);
        }
    }
});
//# sourceMappingURL=search-posts.component.js.map