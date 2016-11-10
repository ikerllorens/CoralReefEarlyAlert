/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {Component, Input} from '@angular/core';

@Component({
    selector: 'data-card',
    templateUrl: 'app/data-card.component/data-card.component.html'
})

export class DataCard {
   @Input() coralSpecie: string;
    @Input() coralPhotoUrl: string = 'img/cea.png'
    @Input() sector: string;

    constructor() {
        console.info('Data Card Component Mounted Successfully');
    }
}