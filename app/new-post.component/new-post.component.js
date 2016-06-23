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
                    this.value = {};
                    console.info('new-post module loaded');
                    this.newPostService.coralTypesObservable$.subscribe(function (items) {
                        _this.CoralType = items.datos;
                    });
                }
                NewPostScreen.prototype.ngOnInit = function () {
                    this.newPostService.getCoralTypes();
                };
                NewPostScreen.prototype.selected = function (value) {
                    console.log('Selected value is: ', value);
                };
                NewPostScreen.prototype.typed = function (value) {
                    console.log('New search input: ', value);
                };
                NewPostScreen.prototype.refreshValue = function (value) {
                    this.value = value;
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