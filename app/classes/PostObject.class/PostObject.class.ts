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

export class CoralTypeResponse {
    success: boolean
    datos: Array<SelectElement>
}

export class CoralSpeciesResponse {
    success: boolean
    datos: Array<SelectElement>
}

export class BleachingResponse {
    success: boolean
    datos: Array<SelectElement>
}

export class DiseasesResponse {
    success: boolean
    datos: Array<SelectElement>
}

export class SectorsResponse {
    success: boolean
    datos: Array<SelectElement>
}
export class SubsectorsResponse {
    success: boolean
    datos: Array<SelectElement>
}

export class SelectElement {
    id: number
    text: string
}

export class CoralSpeciesRequest {
    id: number
    
    constructor(id: number) {
        this.id = id
    }
}

export class SubsectorsRequest {
    id: number
    
    constructor(id: number) {
        this.id= id
    }
}

export class PostObject {
    token: string
    coralTypeId: number
    coralSpeciesId: number
    sectorId: number
    subsectorId:number
    bleaching: any
    diseases: any
    observations: string
    
    constructor(token: string, coralTypeID: number, coralSpeciesId: number, sectorId: number, subsectorId: number, bleaching: any, diseases:any) {
        this.token = token
        this.coralTypeId = coralTypeID
        this.coralSpeciesId = coralSpeciesId
        this.sectorId = sectorId
        this.subsectorId = subsectorId
        this.bleaching = bleaching
        this.diseases = diseases
    }
}