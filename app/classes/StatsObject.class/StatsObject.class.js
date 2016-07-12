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
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StatsResponse, StatsRequest;
    return {
        setters:[],
        execute: function() {
            StatsResponse = (function () {
                function StatsResponse() {
                }
                return StatsResponse;
            }());
            exports_1("StatsResponse", StatsResponse);
            StatsRequest = (function () {
                function StatsRequest(token) {
                    this.token = token;
                }
                return StatsRequest;
            }());
            exports_1("StatsRequest", StatsRequest);
        }
    }
});
//# sourceMappingURL=StatsObject.class.js.map