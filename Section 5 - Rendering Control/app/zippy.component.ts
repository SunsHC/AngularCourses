import {Component, Input} from 'angular2/core'

@Component({
    selector:'zippy',
    template:`
    <div class="panel panel-default">
        <div class="panel-heading" >
            {{title}}
            <i class="pull-right glyphicon"
                [ngClass]="{
                    'glyphicon-chevron-up': !isExpand,
                    'glyphicon-chevron-down': isExpand
                    }"
                (click)=onClick()>
            </i>
        </div>
        <div class="panel-body" *ngIf="isExpand">
            <ng-content></ng-content>
        </div>
    </div>
    `
})

export class ZippyComponent{
    @Input() title;
    isExpand = false;

    onClick(){
        this.isExpand = !this.isExpand;
    }
}
