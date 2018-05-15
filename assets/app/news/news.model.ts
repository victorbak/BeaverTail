export class News {

    constructor(
        public title: string,
        public synopsis: string,
        public tags: [string],
        public replyCount?: number,
        public url?: string,
        public location?: string,
        public dates?: [Date],
        public newsId?: string,
        public userId?: string   
    ){}
}