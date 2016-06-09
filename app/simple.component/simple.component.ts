/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	
import {Component} from "angular2/core"
 
@Component({
    selector: "simple-component",
    template: `
 
        <h1>Hallo Angular 2!</h1>
 
 
<div>
            <label [hidden]="!isCalling">Ich bin {{name}}.</label>
 
<div>
                <input [(ngModel)]="name" >
                <button (click)="toggleCalling()">toggle Calling</button>;
 
</div>
        </div>
 <a [href]="testVar">hola</a>  {{cosa}}
        `
})
export class SimpleComponent {
    private name = "da";
    private isCalling = true;
    private testVar = "#hola"
 private cosa = "fea"
    
    private toggleCalling() {
        this.isCalling = !this.isCalling;
        this.testVar = "#adios"
    }
}