System.register(['angular2/core', './summary.pipe', './favorite.component', './bootstrap.panel.component', './zippy.component'], function(exports_1, context_1) {
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
    var core_1, summary_pipe_1, favorite_component_1, bootstrap_panel_component_1, zippy_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.courses = ["Course1", "Course2", "Course3"];
                    this.viewMode = 'map';
                    this.course = {
                        title: "Angular 2 for Beginners",
                        rating: 4.9745,
                        students: 5981,
                        price: 99.95,
                        releaseDate: new Date()
                    };
                    this.post = {
                        title: "TEST",
                        body: "asdfasdnfoiasdiofjnioasdfjioajsdfiojsadifojsadiofjoiasdfjioasdj"
                    };
                    this.canPress = false;
                    this.task = {
                        title: "Review app",
                        assignee: null
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h4>ngIf</h4>\n    <div *ngIf=\"courses.length > 0\">\n        List of courses\n    </div>\n    <div *ngIf=\"courses.length == 0\">\n        You don't have any courses yet.\n    </div>\n\n    <h4>ngSwitch</h4>\n    <ul class=\"nav nav-pills\">\n        <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode = 'map'\">Map view</a></li>\n        <li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode = 'list'\">List view</a></li>\n    </ul>\n    <div [ngSwitch]=\"viewMode\">\n        <template [ngSwitchWhen]=\"'map'\" ngSwitchDefault>Map View Content</template>\n        <template [ngSwitchWhen]=\"'list'\">List View Content</template>\n    </div>\n    \n    <h4>ngFor</h4>\n    <ul>\n        <li *ngFor=\"#c of courses, #i = index\">\n            {{ i + 1 }} - {{ c }}\n        </li>\n    </ul>\n\n    <h4>pipes</h4>\n    <div>\n    {{course.title | uppercase }}\n    <br/>\n    {{course.students | number }}\n    <br/>\n    {{course.rating | number:'2.2-2' }}\n    <br/>\n    {{course.price | currency:'CAD':true:'2.2-2' }}\n    <br/>\n    {{course.releaseDate | date:'MMM yyyy' }}\n    <br/>\n    {{course | json }}\n    </div>\n\n    <h4>custom pipes</h4>\n    <div>    \n    {{post.title}}\n    <br/>\n    {{post.body | summary:10 }}\n    </div>\n\n    <h4>ngClass</h4>\n    <favorite></favorite>\n\n    <h4>ngStyle</h4>\n    <button class=\"btn btn-primary\" [ngStyle]=\"{\n        backgroundColor: canPress ? 'green' : 'red',\n        color: canPress ? 'white' : 'black',\n        fontWeight: canPress ? 'bold':'normal'\n    }\"\n    >Submit</button>\n\n    <h4>Elvis operator ?. to access nullable object</h4>\n    <ul>\n        <li>Title: {{task.title}}</li>\n        <li>Assigned to: {{ task.assignee?.role?.name}}</li>\n    </ul>\n\n    <h4>ngContent</h4>\n    <bs-panel>\n        <div class=\"heading\">The Heading</div>\n        <div class=\"body\">This is the body</div>\n        <div class=\"body\">This is another body</div>\n    </bs-panel>\n\n    <h4>Zippy exercise</h4>\n    <zippy title=\"List of players\">\n        <div>\n            <ul>\n                <li>Player 1</li>   \n                <li>Player 2</li>   \n                <li>Player 3</li>   \n            </ul>\n        </div>\n    </zippy>\n    ",
                        pipes: [summary_pipe_1.SummaryPipe],
                        directives: [favorite_component_1.FavoriteComponent, bootstrap_panel_component_1.BootstrapPanel, zippy_component_1.ZippyComponent]
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