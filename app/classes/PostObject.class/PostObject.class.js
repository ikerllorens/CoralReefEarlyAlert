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
    var CoralTypeResponse, CoralSpeciesResponse, BleachingResponse, DiseasesResponse, SectorsResponse, SubsectorsResponse, PostResponse, SelectElement, CoralSpeciesRequest, SubsectorsRequest, PostObject;
    return {
        setters:[],
        execute: function() {
            CoralTypeResponse = (function () {
                function CoralTypeResponse() {
                }
                return CoralTypeResponse;
            }());
            exports_1("CoralTypeResponse", CoralTypeResponse);
            CoralSpeciesResponse = (function () {
                function CoralSpeciesResponse() {
                }
                return CoralSpeciesResponse;
            }());
            exports_1("CoralSpeciesResponse", CoralSpeciesResponse);
            BleachingResponse = (function () {
                function BleachingResponse() {
                }
                return BleachingResponse;
            }());
            exports_1("BleachingResponse", BleachingResponse);
            DiseasesResponse = (function () {
                function DiseasesResponse() {
                }
                return DiseasesResponse;
            }());
            exports_1("DiseasesResponse", DiseasesResponse);
            SectorsResponse = (function () {
                function SectorsResponse() {
                }
                return SectorsResponse;
            }());
            exports_1("SectorsResponse", SectorsResponse);
            SubsectorsResponse = (function () {
                function SubsectorsResponse() {
                }
                return SubsectorsResponse;
            }());
            exports_1("SubsectorsResponse", SubsectorsResponse);
            PostResponse = (function () {
                function PostResponse() {
                }
                return PostResponse;
            }());
            exports_1("PostResponse", PostResponse);
            SelectElement = (function () {
                function SelectElement() {
                }
                return SelectElement;
            }());
            exports_1("SelectElement", SelectElement);
            CoralSpeciesRequest = (function () {
                function CoralSpeciesRequest(id) {
                    this.id = id;
                }
                return CoralSpeciesRequest;
            }());
            exports_1("CoralSpeciesRequest", CoralSpeciesRequest);
            SubsectorsRequest = (function () {
                function SubsectorsRequest(id) {
                    this.id = id;
                }
                return SubsectorsRequest;
            }());
            exports_1("SubsectorsRequest", SubsectorsRequest);
            PostObject = (function () {
                function PostObject(token, coralTypeID, coralSpeciesId, sectorId, subsectorId, bleaching, diseases, observations) {
                    this.token = token;
                    this.coralTypeId = coralTypeID;
                    this.coralSpeciesId = coralSpeciesId;
                    this.sectorId = sectorId;
                    this.subsectorId = subsectorId;
                    this.bleaching = bleaching;
                    this.diseases = diseases;
                    this.observations = observations;
                }
                return PostObject;
            }());
            exports_1("PostObject", PostObject);
        }
    }
});
//# sourceMappingURL=PostObject.class.js.map