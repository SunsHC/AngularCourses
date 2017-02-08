import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe';
import {FavoriteComponent} from './favorite.component';
import {BootstrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component';


@Component({
    selector: 'my-app',
    template: `
    <h4>ngIf</h4>
    <div *ngIf="courses.length > 0">
        List of courses
    </div>
    <div *ngIf="courses.length == 0">
        You don't have any courses yet.
    </div>

    <h4>ngSwitch</h4>
    <ul class="nav nav-pills">
        <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map view</a></li>
        <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List view</a></li>
    </ul>
    <div [ngSwitch]="viewMode">
        <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
        <template [ngSwitchWhen]="'list'">List View Content</template>
    </div>
    
    <h4>ngFor</h4>
    <ul>
        <li *ngFor="#c of courses, #i = index">
            {{ i + 1 }} - {{ c }}
        </li>
    </ul>

    <h4>pipes</h4>
    <div>
    {{course.title | uppercase }}
    <br/>
    {{course.students | number }}
    <br/>
    {{course.rating | number:'2.2-2' }}
    <br/>
    {{course.price | currency:'CAD':true:'2.2-2' }}
    <br/>
    {{course.releaseDate | date:'MMM yyyy' }}
    <br/>
    {{course | json }}
    </div>

    <h4>custom pipes</h4>
    <div>    
    {{post.title}}
    <br/>
    {{post.body | summary:10 }}
    </div>

    <h4>ngClass</h4>
    <favorite></favorite>

    <h4>ngStyle</h4>
    <button class="btn btn-primary" [ngStyle]="{
        backgroundColor: canPress ? 'green' : 'red',
        color: canPress ? 'white' : 'black',
        fontWeight: canPress ? 'bold':'normal'
    }"
    >Submit</button>

    <h4>Elvis operator ?. to access nullable object</h4>
    <ul>
        <li>Title: {{task.title}}</li>
        <li>Assigned to: {{ task.assignee?.role?.name}}</li>
    </ul>

    <h4>ngContent</h4>
    <bs-panel>
        <div class="heading">The Heading</div>
        <div class="body">This is the body</div>
        <div class="body">This is another body</div>
    </bs-panel>

    <h4>Zippy exercise</h4>
    <zippy title="List of players">
        <div>
            <ul>
                <li>Player 1</li>   
                <li>Player 2</li>   
                <li>Player 3</li>   
            </ul>
        </div>
    </zippy>
    `,
    pipes: [SummaryPipe],
    directives: [FavoriteComponent, BootstrapPanel, ZippyComponent]
})
export class AppComponent {
    courses = ["Course1", "Course2", "Course3"];

    viewMode = 'map';

    course = {
        title: "Angular 2 for Beginners",
        rating: 4.9745,
        students: 5981,
        price: 99.95,
        releaseDate: new Date()
    }

    post = {
        title:"TEST",
        body:"asdfasdnfoiasdiofjnioasdfjioajsdfiojsadifojsadiofjoiasdfjioasdj"
    }

    canPress = false;

    task = {
        title:"Review app",
        assignee: null
    }
 }