System.register(['angular2/core', './favorite.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, favorite_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.propertyBindingTitle = "Property Binding";
                    this.logo = "https://angularjs.org/img/AngularJS-large.png";
                    this.isActive = true;
                    this.twoWayValue = "Hello Two-Way!";
                }
                AppComponent.prototype.onClick = function () {
                    console.log("Event button clicked!");
                };
                AppComponent.prototype.onClickParam = function ($event) {
                    console.log("Event button clicked!", $event);
                };
                AppComponent.prototype.onClickNoPropagation = function ($event) {
                    $event.stopPropagation();
                    console.log("Event no propagation clicked!", $event);
                };
                AppComponent.prototype.onDivClick = function () {
                    console.log("Div event!");
                };
                AppComponent.prototype.onClear = function () {
                    this.twoWayValue = "";
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{propertyBindingTitle}}</h1>\n    <img [src]=\"logo\"/>\n\n    <h1>Class Binding</h1>\n    <button class=\"btn btn-primary\" [class.active]=\"isActive\">Class</button>\n\n    <h1>Style Binding</h1>\n    <button class=\"btn btn-primary\" [style.backgroundColor]=\"isActive ? 'green' : 'red'\">Style</button>\n\n    <h1>Event Binding</h1>\n    <div (click)=\"onDivClick()\">\n    <button class=\"btn btn-primary\" (click)=\"onClick()\">Event console</button>\n    <button class=\"btn btn-primary\" (click)=\"onClickParam($event)\">Event console w/ param</button>\n    <button class=\"btn btn-primary\" (click)=\"onClickNoPropagation($event)\">Event console w/ no propagation</button>\n    </div>\n\n    <h1>Two-way Binding</h1>\n    <input type=\"text\" [(ngModel)]=\"twoWayValue\">\n    <button class=\"btn btn-danger\" (click)=\"onClear()\">Clear</button>\n    <div class=\"alert alert-success\" role=\"alert\"><strong>Value: </strong>{{twoWayValue}}</div>\n\n    <h1>Favorite exercise</h1>\n    <favorite></favorite>\n    ",
                        directives: [favorite_component_1.FavoriteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map