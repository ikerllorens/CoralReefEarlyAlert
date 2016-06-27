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
System.register(['@angular/core', '../main-app.service/main-app.service', '../new-post.service/new-post.service', '@angular/router-deprecated', 'ng2-select/ng2-select'], function(exports_1, context_1) {
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
    var core_1, main_app_service_1, new_post_service_1, router_deprecated_1, ng2_select_1;
    var NewPostScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (main_app_service_1_1) {
                main_app_service_1 = main_app_service_1_1;
            },
            function (new_post_service_1_1) {
                new_post_service_1 = new_post_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            }],
        execute: function() {
            NewPostScreen = (function () {
                function NewPostScreen(mainScreenService, newPostService, router) {
                    var _this = this;
                    this.mainScreenService = mainScreenService;
                    this.newPostService = newPostService;
                    this.router = router;
                    this.CoralType = [
                        { "id": -1, "text": 'Cargando...' }
                    ];
                    this.valueType = {};
                    this.CoralSpecies = [
                        { "id": -1, "text": "cargando..." }
                    ];
                    this.disabledSpecies = true;
                    this.diseases = [
                        { "id": -1, "text": "cargando..." }
                    ];
                    this.valuesDiseases = new Array(0);
                    this.valuesDiseasesCount = new Array(0);
                    this.bleaching = [
                        { "id": -1, "text": "cargando..." }
                    ];
                    this.valuesBleaching = new Array(0);
                    this.valuesBleachingCount = new Array(0);
                    console.info('new-post module loaded');
                    this.newPostService.coralTypesObservable$.subscribe(function (items) {
                        _this.CoralType = items.datos;
                    });
                    this.newPostService.coralSpeciesObservable$.subscribe(function (itemsSpecies) {
                        _this.CoralSpecies = itemsSpecies.datos;
                        _this.disabledSpecies = false;
                    });
                    this.newPostService.bleachingObservable$.subscribe(function (itemsBleaching) {
                        _this.bleaching = itemsBleaching.datos;
                    });
                    this.newPostService.diseasesObservable$.subscribe(function (itemsDiseases) {
                        _this.diseases = itemsDiseases.datos;
                    });
                }
                NewPostScreen.prototype.ngOnInit = function () {
                    this.newPostService.getCoralTypes();
                    this.newPostService.getBleaching();
                    this.newPostService.getDiseases();
                };
                NewPostScreen.prototype.selectedType = function (value) {
                    console.log('Selected value is: ', value);
                    this.CoralSpecies = [
                        { "id": -1, "text": "cargando..." }
                    ];
                    this.disabledSpecies = true;
                    this.newPostService.getCoralSpecies(value.id);
                    this.refreshValueSpecies({});
                };
                NewPostScreen.prototype.refreshValueType = function (value) {
                    this.valueType = value;
                };
                NewPostScreen.prototype.addBleaching = function () {
                    this.valuesBleachingCount.push(this.valuesBleachingCount.length);
                };
                NewPostScreen.prototype.addDisease = function () {
                    this.valuesDiseasesCount.push(this.valuesDiseasesCount.length);
                };
                NewPostScreen.prototype.selectedSpecies = function (value) {
                    console.log('Selected value is: ', value);
                };
                NewPostScreen.prototype.refreshValueSpecies = function (value) {
                    this.valueSpecies = value;
                };
                NewPostScreen.prototype.removedSpecies = function (value) {
                };
                NewPostScreen.prototype.selectedBleaching = function (value, index) {
                    console.log('Selected value is: ' + value + ' from index: ' + index);
                };
                NewPostScreen.prototype.refreshValueBleaching = function (value, index) {
                    if (value.id) {
                        console.info(value.text + "->> log from ->> " + index);
                        this.valuesBleaching[index] = value;
                    }
                };
                NewPostScreen.prototype.removedBleaching = function (index) {
                    this.valuesBleaching.splice(index, 1);
                    this.valuesBleachingCount.splice(index, 1);
                };
                NewPostScreen.prototype.selectedDisease = function (value, index) {
                };
                NewPostScreen.prototype.refreshValueDisease = function (value, index) {
                    if (value.id) {
                        console.info(value.text + "->> log from ->> " + index);
                        this.valuesDiseases[index] = value;
                    }
                };
                NewPostScreen.prototype.removedDisease = function (index) {
                    this.valuesDiseases.splice(index, 1);
                    this.valuesDiseasesCount.splice(index, 1);
                };
                NewPostScreen.prototype.sendPost = function (event) {
                    console.warn("this data will be sent");
                    for (var _i = 0, _a = this.valuesDiseases; _i < _a.length; _i++) {
                        var diseaseItem = _a[_i];
                        console.warn(diseaseItem.id + "--->" + diseaseItem.text);
                    }
                };
                NewPostScreen = __decorate([
                    core_1.Component({
                        selector: 'new-post',
                        templateUrl: 'app/new-post.component/new-post.component.html',
                        providers: [new_post_service_1.NewPostService],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, ng2_select_1.SELECT_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [main_app_service_1.MainScreenService, new_post_service_1.NewPostService, router_deprecated_1.Router])
                ], NewPostScreen);
                return NewPostScreen;
            }());
            exports_1("NewPostScreen", NewPostScreen);
        }
    }
});
//# sourceMappingURL=new-post.component.js.map