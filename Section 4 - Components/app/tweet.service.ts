export class TweetService {
    getTweets() {
        return [
        {
            image: "http://lorempixel.com/100/100/people?1",
            title: "test 1",
            body: "ablabl ablabla ablablaablabla aaabla aabl aaabla",
            numberOfLikes: 15,
            isLike: true
        },
        {
            image: "http://lorempixel.com/100/100/people?2",
            title: "test 2",
            body: "fdsafd fdsa saf dfdsaf dsasa",
            numberOfLikes: 23,
            isLike: true
        },
        {
            image: "http://lorempixel.com/100/100/people?3",
            title: "test 3",
            body: "qewrqqewr ewrq qewr qewrqewr ewrqewr ewr",
            numberOfLikes: 55,
            isLike: false
        }];
    }
}