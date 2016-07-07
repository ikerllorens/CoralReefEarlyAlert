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


export class SearchPostTable {
    postDate: Date
    coralType: string
    coralSpecies: string
    sector: string
    subsector: string
    diseases: DiseasesBlechingObject[]
    bleaching: DiseasesBlechingObject[]
    fotos: string[]
    comments: string
}

export class DiseasesBlechingObject {
    nombre: string
    percentage: string
}

export class SearchPostResponse {
    success: boolean
    datos: SearchPostTable[]
    paginas: number
}

export class SearchPostRequest {
    curpage: number
    inicio: string
    final: string
    TipCoral: number[]
    Especie: number[]
    Sector: number[]
    SubSector: number[]
}