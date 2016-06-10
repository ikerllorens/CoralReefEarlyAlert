/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register(["@angular/core", '../data-card.component/data-card.component'], function(exports_1, context_1) {
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
    var core_1, data_card_component_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_card_component_1_1) {
                data_card_component_1 = data_card_component_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                    this.title = "Alerta Temprana de Arrecifes de Coral";
                    this.menuElements = [{ "menuName": "Home", "menuRef": "#" },
                        { "menuName": "Away", "menuRef": "#away" }];
                    console.info('main-app module loaded');
                }
                Main = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        directives: [data_card_component_1.DataCard],
                        templateUrl: 'app/main-app/main-app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=main-app.js.map