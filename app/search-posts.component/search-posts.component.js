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
System.register(['@angular/core', 'ng2-bootstrap/ng2-bootstrap', '../main-app/main-app', '../main-app.service/main-app.service', '../search-posts.service/search-posts.service', 'ng2-select/ng2-select'], function(exports_1, context_1) {
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
    var core_1, ng2_bootstrap_1, ng2_bootstrap_2, main_app_1, main_app_service_1, search_posts_service_1, ng2_select_1;
    var SearchPostsScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
                ng2_bootstrap_2 = ng2_bootstrap_1_1;
            },
            function (main_app_1_1) {
                main_app_1 = main_app_1_1;
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
                    this.coralTypeFilters = [];
                    this.coralSpecies = [];
                    this.coralSpeciesFilters = [];
                    this.sectors = [];
                    this.sectorsFilters = [];
                    this.subSectors = [];
                    this.subSectorsFilters = [];
                    this.selectedPhotos = [];
                    this.itemsPerPage = 10;
                    this.maxSize = 7;
                    this.bigCurrentPage = 1;
                    this.bigTotalItems = 0;
                    this.startDate = "";
                    this.endDate = "";
                    this.activeFilters = true;
                    console.info('search-posts module loaded');
                    this.searchPostsService.coralTypesObservable$.subscribe(function (items) {
                        _this.coralTypes = items.datos;
                    });
                    this.searchPostsService.coralSpeciesObservable$.subscribe(function (items) {
                        _this.coralSpecies = items.datos;
                    });
                    this.searchPostsService.sectorsObservable$.subscribe(function (items) {
                        _this.sectors = items.datos;
                    });
                    this.searchPostsService.subsectorObsevable$.subscribe(function (items) {
                        _this.subSectors = items.datos;
                    });
                    this.searchPostsService.postsTableObservable$.subscribe(function (postsData) {
                        _this.bigTotalItems = (postsData.paginas * _this.itemsPerPage);
                        _this.tableRows = postsData.datos;
                    });
                }
                SearchPostsScreen.prototype.ngOnInit = function () {
                    this.searchPostsService.getCoralTypes();
                    this.searchPostsService.getCoralSpecies();
                    this.searchPostsService.getSectors();
                    this.searchPostsService.getSubsectors();
                    this.searchPostsService.getTableData(1, new Date('2016-06-28 15:56:14'), new Date('2016-06-28 15:56:14'), this.coralTypeFilters, this.coralSpeciesFilters, this.sectorsFilters, this.subSectorsFilters);
                };
                SearchPostsScreen.prototype.refreshValueType = function (event) {
                    if (event) {
                        this.coralTypeFilters = event.map(function (IDs) { return IDs.id; });
                        console.info(this.coralTypeFilters);
                    }
                    else {
                        this.coralTypeFilters = [];
                    }
                };
                SearchPostsScreen.prototype.refreshValueSpecies = function (event) {
                    if (event) {
                        this.coralSpeciesFilters = event.map(function (IDs) { return IDs.id; });
                        console.info(this.coralSpeciesFilters);
                    }
                    else {
                        this.coralSpeciesFilters = [];
                    }
                };
                SearchPostsScreen.prototype.refreshValueSector = function (event) {
                    if (event) {
                        this.sectorsFilters = event.map(function (IDs) { return IDs.id; });
                        console.info(this.sectorsFilters);
                    }
                    else {
                        this.sectorsFilters = [];
                    }
                };
                SearchPostsScreen.prototype.refreshValueSubsector = function (event) {
                    if (event) {
                        this.subSectorsFilters = event.map(function (IDs) { return IDs.id; });
                        console.info(this.subSectorsFilters);
                    }
                    else {
                        this.subSectorsFilters = [];
                    }
                };
                SearchPostsScreen.prototype.showPhotos = function (index) {
                    //{ruta: "../.."/xx.jpg}
                    this.selectedPhotos = this.tableRows[index].fotos.map(function (routes) { return (main_app_1.Main.serverUrl + routes.ruta); });
                    console.info(this.selectedPhotos);
                };
                SearchPostsScreen.prototype.changePage = function (pagenumber) {
                    console.warn(pagenumber.page);
                    this.searchPostsService.getTableData(pagenumber.page, new Date('2016-06-28 15:56:14'), new Date('2016-06-28 15:56:14'), this.coralTypeFilters, this.coralSpeciesFilters, this.sectorsFilters, this.subSectorsFilters);
                };
                SearchPostsScreen.prototype.applyFilters = function () {
                    this.searchPostsService.getTableData(1, new Date('2016-06-28 15:56:14'), new Date('2016-06-28 15:56:14'), this.coralTypeFilters, this.coralSpeciesFilters, this.sectorsFilters, this.subSectorsFilters);
                };
                SearchPostsScreen.prototype.clearFilter = function () {
                    //Limpiar selección
                    this.coralTypeFilters = [];
                    this.coralSpeciesFilters = [];
                    this.sectorsFilters = [];
                    this.subSectorsFilters = [];
                    this.searchPostsService.getTableData(1, new Date('2016-06-28 15:56:14'), new Date('2016-06-28 15:56:14'), this.coralTypeFilters, this.coralSpeciesFilters, this.sectorsFilters, this.subSectorsFilters);
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
                                "nombre": "gripe corálica",
                                "percentage": "23"
                            },
                            {
                                "nombre": "viruela corálica",
                                "percentage": "43"
                            },
                            {
                                "nombre": "posesión diabólica corálica",
                                "percentage": "23"
                            },
                            {
                                "nombre": "banda roja",
                                "percentage": "23"
                            }
                        ],
                        "bleaching": [
                            {
                                "nombre": "parcial",
                                "percentage": "21"
                            }
                        ],
                        "fotos": ["hello", "nunca"],
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
                        "fotos": ["uploads/15/235b32801f9346071cbb3a3af0eee34b.jpg", "uploads/15/a88810c40bf6df34c915831eb75db771.jpeg"],
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
                        "fotos": ["hello", "nunca"],
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
                        "fotos": ["hello", "nunca"],
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
                        "fotos": ["hello", "nunca"],
                        "comments": "hasta crees"
                    });
                    //this.bigTotalItems = this.tableRows.length
                };
                SearchPostsScreen = __decorate([
                    core_1.Component({
                        selector: "search-posts",
                        providers: [search_posts_service_1.SearchPostsService],
                        directives: [ng2_bootstrap_1.PAGINATION_DIRECTIVES, ng2_select_1.SELECT_DIRECTIVES, ng2_bootstrap_2.MODAL_DIRECTVES, ng2_bootstrap_2.CAROUSEL_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_2.BS_VIEW_PROVIDERS],
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