import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';


@Component({
    selector: 'my-app',
    template: `
    <h1>{{propertyBindingTitle}}</h1>
    <img [src]="logo"/>

    <h1>Class Binding</h1>
    <button class="btn btn-primary" [class.active]="isActive">Class</button>

    <h1>Style Binding</h1>
    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'green' : 'red'">Style</button>

    <h1>Event Binding</h1>
    <div (click)="onDivClick()">
    <button class="btn btn-primary" (click)="onClick()">Event console</button>
    <button class="btn btn-primary" (click)="onClickParam($event)">Event console w/ param</button>
    <button class="btn btn-primary" (click)="onClickNoPropagation($event)">Event console w/ no propagation</button>
    </div>

    <h1>Two-way Binding</h1>
    <input type="text" [(ngModel)]="twoWayValue">
    <button class="btn btn-danger" (click)="onClear()">Clear</button>
    <div class="alert alert-success" role="alert"><strong>Value: </strong>{{twoWayValue}}</div>

    <h1>Favorite exercise</h1>
    <favorite></favorite>
    `,
    directives: [FavoriteComponent]
})
export class AppComponent {
    propertyBindingTitle = "Property Binding";
    logo = "https://angularjs.org/img/AngularJS-large.png";
    isActive = true;
    twoWayValue = "Hello Two-Way!";

    onClick(){
        console.log("Event button clicked!");
    }

    onClickParam($event){
        console.log("Event button clicked!", $event);
    }

    onClickNoPropagation($event){
        $event.stopPropagation();
        console.log("Event no propagation clicked!", $event);
    }

    onDivClick() {
        console.log("Div event!");
    }

    onClear(){
        this.twoWayValue = "";
    }
 }