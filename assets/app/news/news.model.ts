export class News {

    constructor(
        public title: string,
        public synopsis: string,
        public tags: string[],
        public replyCount?: number,
        public url?: string,
        public longitude?: number,
        public latitude?: number,
        public dateTo?: Date,
        public dateFrom?: Date,
        public creationDate?: Date, 
        public newsId?: string,
        public userId?: string,
        public username?: string   
    ){}
}