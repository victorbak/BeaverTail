export class News {

    constructor(
        public title: string,
        public synopsis: string,
        public tags: string[],
        public replyCount?: number,
        public url?: string,
        public longitude?: number,
        public latitude?: number,
        public dates?: [Date],
        public creationDate?: Date,
        public newsId?: string,
        public userId?: string,
        public username?: string   
    ){}
}