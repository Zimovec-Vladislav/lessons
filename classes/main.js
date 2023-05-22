class Comment {
    constructor (text) {
        this.text = text
    }

    static mergeCommentary (first, second) {
        return `${first}, ${second}`
    }
}

Comment.mergeCommentary('The blue whale', 'infinite ocean')