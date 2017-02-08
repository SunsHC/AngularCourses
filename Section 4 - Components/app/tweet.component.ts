import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {LikeComponent} from './like.component';

@Component({
    selector:'tweet',
    template:`
        <div class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" [src]="data.image">
                </a>
            </div>
            <div class="media-body">
                <h2 class="media-heading">{{ data.title }}</h2>
                <h4>{{ data.body }}</h4>
                <like [numberOfLikes]="data.numberOfLikes" [isLike]="data.isLike"></like>
            </div>
        </div>
    `,
    directives: [LikeComponent]
})

export class TweetComponent{
    @Input() data;
}
