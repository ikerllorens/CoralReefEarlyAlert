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
import {Main} from '../main-app/main-app'

import {SelectElement} from '../classes/PostObject.class/PostObject.class'
import {PostObject} from '../classes/PostObject.class/PostObject.class'


import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated'

import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select'
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload/ng2-file-upload';


@Component({
    selector: 'new-post',
    templateUrl: 'app/new-post.component/new-post.component.html',
    providers: [NewPostService],
    directives: [ROUTER_DIRECTIVES, SELECT_DIRECTIVES, FILE_UPLOAD_DIRECTIVES]
})

export class NewPostScreen implements OnInit {
    public CoralType: Array<SelectElement> = [
        { "id": -1, "text": 'Cargando...' }
    ]
    private valueType: SelectElement;

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
    public valuesDiseasesPercentage: number[] = []

    public bleaching: Array<SelectElement> = [
        { "id": -1, "text": "cargando..." }
    ]
    private valuesBleaching: SelectElement[] = new Array<SelectElement>(0)
    private valuesBleachingCount: number[] = new Array<number>(0)
    public valuesBleachingPercentage: number[] = []

    public sectors: Array<SelectElement> = [
        { "id": -1, "text": "cargando..." }
    ]
    private valueSector: SelectElement

    public subsectors: Array<SelectElement> = [
        { "id": -1, "text": "cargando..." }
    ]
    private valueSubsector: SelectElement
    public disabledSubsector: boolean = true

    public comments: string = ""


    public uploader: FileUploader = new FileUploader({ url: Main.serverUrl + 'test.php' });

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

        this.newPostService.sectorsObservable$.subscribe(
            itemsSectors => {
                this.sectors = itemsSectors.datos
            })

        this.newPostService.subsectorObsevable$.subscribe(
            itemsSubsectors => {
                this.subsectors = itemsSubsectors.datos
                this.disabledSubsector = false
            })
    }

    ngOnInit() {
        this.newPostService.getCoralTypes()
        this.newPostService.getBleaching()
        this.newPostService.getDiseases()
        this.newPostService.getSectors()

        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            console.log("item uploaded" + response);
            console.log(item.file.name)
        };
        
        this.uploader.onBeforeUploadItem = (item: any) => {
            item.file.name = "1_postID_" + item.file.name
        }      
    }

    public addBleaching() {
        this.valuesBleachingCount.push(0)
    }

    public addDisease() {
        this.valuesDiseasesCount.push(0)
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

    public selectedSpecies(value: SelectElement): void {
        console.log('Selected value is: ', value);
    }
    public refreshValueSpecies(value: any): void {
        this.valueSpecies = value;
    }
    public removedSpecies(value: any): void {
        this.valueSpecies = null
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
        this.valuesBleachingPercentage.splice(index, 1)
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
        this.valuesDiseasesPercentage.splice(index, 1)
    }

    public selectedSectors(value: SelectElement): void {
        console.log('Selected value is: ', value);
        this.subsectors = [
            { "id": -1, "text": "cargando..." }
        ]
        this.disabledSpecies = true
        this.newPostService.getSubsectors(value.id)
    }
    public refreshValueSectors(value: any): void {
        this.valueSector = value;
    }

    public selectedSubsector(value: SelectElement): void {
        console.log('Selected value is: ', value);

    }
    public refreshValueSubsector(value: any): void {
        this.valueSubsector = value;
    }
    public removedSubsector(value: any): void {
        this.valueSubsector = null
    }


    public sendPost(event: any) {
        let diseasesPack = []
        let bleachingPack = []
        let token = this.mainScreenService.getLoginInfo().token

        for (var i = 0; i < this.valuesDiseasesCount.length; ++i) {
            if (this.valuesDiseases[i])  {
                if (!this.valuesDiseasesPercentage[i]) {
                    this.valuesDiseasesPercentage[i] = -1
                }
                diseasesPack.push({ "id": this.valuesDiseases[i].id, "percentage": this.valuesDiseasesPercentage[i] })
            }
        }
        for (var i = 0; i < this.valuesBleachingCount.length; ++i) {
            if (this.valuesBleaching[i]) {
                if (!this.valuesBleachingPercentage[i]) {
                    this.valuesBleachingPercentage[i] = -1
                }
                bleachingPack.push({ "id": this.valuesBleaching[i].id, "percentage": this.valuesBleachingPercentage[i] })
            }
        }

        if (!this.valueType.id) {
            event.preventDefault()
            alert('Por favor ingresa un tipo de coral')
            return
        }
        if (!this.valueSector.id) {
            event.preventDefault()
            alert('Por favor ingresa un sector')
            return
        }

        let postPackage = new PostObject(token, this.valueType.id, this.valueSpecies.id, this.valueSector.id, this.valueSubsector.id, bleachingPack, diseasesPack, this.comments)
        console.info('JSON final: ' + JSON.stringify(postPackage))
        this.newPostService.sendPost(postPackage)

    }
}