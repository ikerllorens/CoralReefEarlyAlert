/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register(['@angular/platform-browser-dynamic', '../main-app/main-app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, main_app_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (main_app_1_1) {
                main_app_1 = main_app_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(main_app_1.Main);
        }
    }
});
//# sourceMappingURL=boot.js.map