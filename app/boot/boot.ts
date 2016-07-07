/* 
 * To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {Main} from '../main-app/main-app'
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HTTP_BINDINGS} from '@angular/http';
import {LoginScreenService} from '../login-screen.service/login-screen.service'

//enableProdMode()
bootstrap(Main, [ROUTER_PROVIDERS, HTTP_BINDINGS]);
