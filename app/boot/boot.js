/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register(['angular2/platform/browser', '../simple.component/simple.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, simple_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (simple_component_1_1) {
                simple_component_1 = simple_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(simple_component_1.SimpleComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map