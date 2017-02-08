import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {TweetsComponent} from './tweets.component';

@Component({
    selector: 'my-app',
    template: `
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    <like [numberOfLikes]="comment.numberOfLikes" [isLike]="comment.isLike"></like>
    <voter [myVote]="vote.myVote" [voteCount]="vote.voteCount" (vote)="onVoteChange($event)"></voter>
    <tweets></tweets>
    `,
    directives: [FavoriteComponent, LikeComponent, VoterComponent, TweetsComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true,
    }

    comment = {
        numberOfLikes: 25,
        isLike: false,
    }

    vote = {
        myVote: 0,
        voteCount: 13, 
    }

    onFavoriteChange($event){
        console.log($event);
    }

    onVoteChange($event){
        console.log($event);
    }
 }