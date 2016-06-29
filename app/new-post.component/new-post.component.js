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
System.register(['@angular/core', '../main-app.service/main-app.service', '../new-post.service/new-post.service', '../main-app/main-app', '../classes/PostObject.class/PostObject.class', '@angular/router-deprecated', 'ng2-select/ng2-select', 'ng2-file-upload/ng2-file-upload'], function(exports_1, context_1) {
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
    var core_1, main_app_service_1, new_post_service_1, main_app_1, PostObject_class_1, router_deprecated_1, ng2_select_1, ng2_file_upload_1;
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
            function (main_app_1_1) {
                main_app_1 = main_app_1_1;
            },
            function (PostObject_class_1_1) {
                PostObject_class_1 = PostObject_class_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
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
                    this.CoralSpecies = [
                        { "id": -1, "text": "cargando..." }
                    ];
                    this.disabledSpecies = true;
                    this.diseases = [
                        { "id": -1, "text": "cargando..." }
                    ];
                    this.valuesDiseases = new Array(0);
                    this.valuesDiseasesCount = new Array(0);
                    this.valuesDiseasesPercentage = [];
                    this.bleaching = [
                        { "id": -1, "text": "cargando..." }
                    ];
                    this.valuesBleaching = new Array(0);
                    this.valuesBleachingCount = new Array(0);
                    this.valuesBleachingPercentage = [];
                    this.sectors = [
                        { "id": -1, "text": "cargando..." }
                    ];
                    this.subsectors = [
                        { "id": -1, "text": "cargando..." }
                    ];
                    this.disabledSubsector = true;
                    this.comments = "";
                    this.uploader = new ng2_file_upload_1.FileUploader({ url: main_app_1.Main.serverUrl + 'test.php' });
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
                    this.newPostService.sectorsObservable$.subscribe(function (itemsSectors) {
                        _this.sectors = itemsSectors.datos;
                    });
                    this.newPostService.subsectorObsevable$.subscribe(function (itemsSubsectors) {
                        _this.subsectors = itemsSubsectors.datos;
                        _this.disabledSubsector = false;
                    });
                }
                NewPostScreen.prototype.ngOnInit = function () {
                    this.newPostService.getCoralTypes();
                    this.newPostService.getBleaching();
                    this.newPostService.getDiseases();
                    this.newPostService.getSectors();
                    this.uploader.onCompleteItem = function (item, response, status, headers) {
                        console.log("item uploaded" + response);
                    };
                };
                NewPostScreen.prototype.addBleaching = function () {
                    this.valuesBleachingCount.push(0);
                };
                NewPostScreen.prototype.addDisease = function () {
                    this.valuesDiseasesCount.push(0);
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
                NewPostScreen.prototype.selectedSpecies = function (value) {
                    console.log('Selected value is: ', value);
                };
                NewPostScreen.prototype.refreshValueSpecies = function (value) {
                    this.valueSpecies = value;
                };
                NewPostScreen.prototype.removedSpecies = function (value) {
                    this.valueSpecies = null;
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
                    this.valuesBleachingPercentage.splice(index, 1);
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
                    this.valuesDiseasesPercentage.splice(index, 1);
                };
                NewPostScreen.prototype.selectedSectors = function (value) {
                    console.log('Selected value is: ', value);
                    this.subsectors = [
                        { "id": -1, "text": "cargando..." }
                    ];
                    this.disabledSpecies = true;
                    this.newPostService.getSubsectors(value.id);
                };
                NewPostScreen.prototype.refreshValueSectors = function (value) {
                    this.valueSector = value;
                };
                NewPostScreen.prototype.selectedSubsector = function (value) {
                    console.log('Selected value is: ', value);
                };
                NewPostScreen.prototype.refreshValueSubsector = function (value) {
                    this.valueSubsector = value;
                };
                NewPostScreen.prototype.removedSubsector = function (value) {
                    this.valueSubsector = null;
                };
                NewPostScreen.prototype.sendPost = function (event) {
                    var diseasesPack = [];
                    var bleachingPack = [];
                    var token = this.mainScreenService.getLoginInfo().token;
                    for (var i = 0; i < this.valuesDiseasesCount.length; ++i) {
                        if (this.valuesDiseases[i]) {
                            if (!this.valuesDiseasesPercentage[i]) {
                                this.valuesDiseasesPercentage[i] = -1;
                            }
                            diseasesPack.push({ "id": this.valuesDiseases[i].id, "percentage": this.valuesDiseasesPercentage[i] });
                        }
                    }
                    for (var i = 0; i < this.valuesBleachingCount.length; ++i) {
                        if (this.valuesBleaching[i]) {
                            if (!this.valuesBleachingPercentage[i]) {
                                this.valuesBleachingPercentage[i] = -1;
                            }
                            bleachingPack.push({ "id": this.valuesBleaching[i].id, "percentage": this.valuesBleachingPercentage[i] });
                        }
                    }
                    if (!this.valueType.id) {
                        event.preventDefault();
                        alert('Por favor ingresa un tipo de coral');
                        return;
                    }
                    if (!this.valueSector.id) {
                        event.preventDefault();
                        alert('Por favor ingresa un sector');
                        return;
                    }
                    var postPackage = new PostObject_class_1.PostObject(token, this.valueType.id, this.valueSpecies.id, this.valueSector.id, this.valueSubsector.id, bleachingPack, diseasesPack, this.comments);
                    console.info('JSON final: ' + JSON.stringify(postPackage));
                    this.newPostService.sendPost(postPackage);
                };
                NewPostScreen = __decorate([
                    core_1.Component({
                        selector: 'new-post',
                        templateUrl: 'app/new-post.component/new-post.component.html',
                        providers: [new_post_service_1.NewPostService],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, ng2_select_1.SELECT_DIRECTIVES, ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES]
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