import {Component} from 'angular2/core'

@Component({
    selector:'favorite',
    template:`
        <span [class]="isFavorite ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty'" (click)=onClick()></span>
        <!-- class="glyphicon" [class.glyphicon-star]="isFavorite" [class.glyphicon-star-empty]="!isFavorite"  -->
    `
})

export class FavoriteComponent{
    isFavorite = false;

    onClick(){
        this.isFavorite = !this.isFavorite;
    }
}
