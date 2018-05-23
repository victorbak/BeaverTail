export class Reply {

    constructor(
        public title: string,
        public synopsis: string,
        public tags: string[],
        public verify: string,
        public url?: string,
        public replyId?: string,
        public newsId?: string,
        public userId?: string,
        public username?: string,
        public creationDate?: Date   
    ){}
}