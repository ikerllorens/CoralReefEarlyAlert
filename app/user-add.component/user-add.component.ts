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

import {Component, OnInit} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated'
import {MainScreenService} from '../main-app.service/main-app.service'
import {UserAddService} from '../user-add.service/user-add.service'

import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {BUTTON_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'luser-add',
    directives: [ROUTER_DIRECTIVES, BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: 'app/user-add.component/user-add.component.html'
})

export class UserAddScreen implements OnInit {
    private username: string = ""
    private password: string = ""
    private name: string = ""
    private surname: string =""
    private userType: number = 1
    
    /*
     * Variable de control que evita que se pueda realizar alguna acción en lo que se 
     * comprueba si el usuario es administrador con el servidor. Est variable cambiara a true
     * en caso de que al recibir la respuesta del servidor el usuario sea administrador
     * de otro modo se le redirecciona a Home
     */
    private editing: boolean = false; 
    
    constructor(private mainScreenService: MainScreenService, private router: Router) {
        console.info("user-add module loaded")
        // TODO: Subscribir a main screen Service
    }
    
    ngOnInit () {
        let loginInfo = this.mainScreenService.getLoginInfo();
        if (loginInfo.userType == 2) { //2 = administrador          
            console.info("Admin detected")
            this.editing = true
        } else {
            console.info("Not Logged in as Admin")
            this.editing = false
            //this.router.navigate(['Home']);
        }
    }   
}