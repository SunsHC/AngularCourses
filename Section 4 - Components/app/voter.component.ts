import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector:'voter',
    template:`
        <div class="voter">
            <i class="glyphicon glyphicon-menu-up vote-button" [class.voted]="myVote == 1" (click)=onUpvoteClick()></i>
            <span class="voterText">{{ voteCount + myVote }}</span>
            <i class="glyphicon glyphicon-menu-down vote-button" [class.voted]="myVote == -1" (click)=onDownvoteClick()></i>
        </div>
    `,
    styles: [`
        .voter {
            width: 20px;
            text-align: center;
            color: #999;
        }

        .voterText {
            font-size: 1.2em;
        }

        .vote-button {
            cursor: pointer;
        }

        .voted {
            color: orange;
        }
    `]
})

export class VoterComponent{
    @Input() myVote = 0;
    @Input() voteCount = 0;

    @Output() vote = new EventEmitter();

    onUpvoteClick(){
        if (this.myVote < 1)
        {
            this.myVote++;
            this.vote.emit({ myVote: this.myVote });
        }        
    }

    onDownvoteClick(){
        if (this.myVote > -1)
        {
            this.myVote--;
            this.vote.emit({ myVote: this.myVote });
        }        
    }
}