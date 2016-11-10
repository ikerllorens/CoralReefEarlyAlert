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


export class UserAddObject {
    name: string = ""
    surname: string =""
    username: string =""
    password: string = ""
    userType: number = 1
    
    constructor(username: string, password: string, name: string, surname: string, userType: number) {
        this.username = username
        this.password = password
        this.name = name
        this.surname = surname
        this.userType = userType
    }
}



export class UserAddResponse {
    success: boolean = false
    reason: string = ""
}