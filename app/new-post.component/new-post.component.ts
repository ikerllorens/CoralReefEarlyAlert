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

import {Component, OnInit} from '@angular/core'
import {MainScreenService} from '../main-app.service/main-app.service'
import {NewPostService} from '../new-post.service/new-post.service'

import {SelectElement} from '../classes/PostObject.class/PostObject.class'

import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated'

import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select'

@Component({
    selector: 'new-post',
    templateUrl: 'app/new-post.component/new-post.component.html',
    providers: [NewPostService],
    directives: [ROUTER_DIRECTIVES, SELECT_DIRECTIVES]
})

export class NewPostScreen implements OnInit {
    public CoralType: Array<SelectElement> = [
        { "id": -1, "text": 'Cargando...' }
    ]
    private valueType: any = {};

    public CoralSpecies: Array<SelectElement> = [
        { "id": -1, "text": "cargando..." }
    ]
    private valueSpecies: SelectElement;
    public disabledSpecies: boolean = true

    public diseases: Array<SelectElement> = [
        { "id": -1, "text": "cargando..." }
    ]
    private valuesDiseases: SelectElement[] = new Array<SelectElement>(0)
    private valuesDiseasesCount: number[] = new Array<number>(0)

    public bleaching: Array<SelectElement> = [
        { "id": -1, "text": "cargando..." }
    ]
    private valuesBleaching: SelectElement[] = new Array<SelectElement>(0)
    private valuesBleachingCount: number[] = new Array<number>(0)

    constructor(private mainScreenService: MainScreenService, private newPostService: NewPostService, private router: Router) {
        console.info('new-post module loaded')
        this.newPostService.coralTypesObservable$.subscribe(
            items => {
                this.CoralType = items.datos
            })

        this.newPostService.coralSpeciesObservable$.subscribe(
            itemsSpecies => {
                this.CoralSpecies = itemsSpecies.datos
                this.disabledSpecies = false
            })

        this.newPostService.bleachingObservable$.subscribe(
            itemsBleaching => {
                this.bleaching = itemsBleaching.datos
            })

        this.newPostService.diseasesObservable$.subscribe(
            itemsDiseases => {
                this.diseases = itemsDiseases.datos
            })
    }

    ngOnInit() {
        this.newPostService.getCoralTypes()
        this.newPostService.getBleaching()
        this.newPostService.getDiseases()
    }

    public selectedType(value: SelectElement): void {
        console.log('Selected value is: ', value);
        this.CoralSpecies = [
            { "id": -1, "text": "cargando..." }
        ]
        this.disabledSpecies = true
        this.newPostService.getCoralSpecies(value.id)
        this.refreshValueSpecies({})
    }

    public refreshValueType(value: any): void {
        this.valueType = value;
    }

    public addBleaching() {
        this.valuesBleachingCount.push(this.valuesBleachingCount.length)
    }

    public addDisease() {
        this.valuesDiseasesCount.push(this.valuesDiseasesCount.length)
    }

    public selectedSpecies(value: SelectElement): void {
        console.log('Selected value is: ', value);

    }
    public refreshValueSpecies(value: any): void {
        this.valueSpecies = value;
    }
    public removedSpecies(value: any): void {

    }


    public selectedBleaching(value: SelectElement, index: any): void {
        console.log('Selected value is: ' + value + ' from index: ' + index);
    }
    public refreshValueBleaching(value: SelectElement, index: number): void {
        if (value.id) {
            console.info(value.text + "->> log from ->> " + index)
            this.valuesBleaching[index] = value
        } 
    }
    public removedBleaching(index: any): void {
        this.valuesBleaching.splice(index, 1)
        this.valuesBleachingCount.splice(index, 1)
    }


    public selectedDisease(value: SelectElement, index: any): void {

    }
    public refreshValueDisease(value: SelectElement, index: number): void {
        if (value.id) {
            console.info(value.text + "->> log from ->> " + index)
            this.valuesDiseases[index] = value
        } 
    }
    public removedDisease(index: any): void { 
       this.valuesDiseases.splice(index, 1)
        this.valuesDiseasesCount.splice(index, 1)
    }

    public sendPost(event: any) {
        console.warn("this data will be sent")
        for (let diseaseItem of this.valuesDiseases) {
            console.warn(diseaseItem.id + "--->" + diseaseItem.text)
        }
    }
}