/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {Component} from '@angular/core';

@Component({
  selector: 'data-card',
  templateUrl: 'app/data-card.component/data-card.component.html'
  //styleUrls: ['app/data-card.component/data-card.component.css']
})

export class DataCard {
	id_registro: String;
	fecha: String;
	inst: String;
	
  	constructor() {
    	console.info('Data Card Component Mounted Successfully');
  	}
}