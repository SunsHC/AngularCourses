import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector:'like',
    template:`
        <i class="glyphicon glyphicon-heart" [class.like]="isLike" (click)=onClick()></i>
        <span>{{ numberOfLikes }}</span>
    `,
    styles: [`
        .glyphicon-heart {
            cursor: pointer;
            color: #ccc;
        }

        .like {
            color: deeppink;
        }
    `]
})

export class LikeComponent{
    @Input() isLike = false;
    @Input() numberOfLikes = 0;

    onClick(){
        this.isLike = !this.isLike;
        if (this.isLike)
            this.numberOfLikes++;
        else
            this.numberOfLikes--;
    }
}
