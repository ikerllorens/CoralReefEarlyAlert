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
import {StatsScreenService} from '../stats-screen.service/stats-screen.service'

@Component({
    selector: 'stats-screen',
    templateUrl: 'app/stats-screen.component/stats-screen.component.html',
    providers: [StatsScreenService]
})

export class StatsScreen implements OnInit {
    public userPosts: number
    public totalPosts: number
    public imagePath = 'img/semaforo_neutro.png'

    constructor(private mainScreenService: MainScreenService, private statsScreenService: StatsScreenService) {
        this.statsScreenService.statsObservable$.subscribe(
            stats => {
                this.userPosts = stats.userPosts
                this.totalPosts = stats.totalPosts
                switch (stats.status) {
                    case 0:
                        this.imagePath = 'img/semaforo_verde.png'
                        break
                    case 1:
                        this.imagePath = 'img/semaforo_amarillo.png'
                        break
                    case 2:
                        this.imagePath = 'img/semaforo_rojo.png'
                        break
                    default:
                        this.imagePath = 'img/semaforo_neutro.png'
                        break
                }
            })
    }

    ngOnInit() {
        this.statsScreenService.getStats(this.mainScreenService.getLoginInfo().token)
    }
}