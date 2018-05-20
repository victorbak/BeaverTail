export class Reply {

    constructor(
        public title: string,
        public synopsis: string,
        public tags: string[],
        public replyCount?: number,
        public url?: string,
        public creationDate?: Date, 
        public replyId?: string,
        public newsId?: string,
        public userId?: string,
        public username?: string   
    ){}
}