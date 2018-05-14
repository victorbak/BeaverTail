export class News {

    constructor(
        public title: string,
        public synopsis: string,
        public tags: [string],
        public votes?: number,
        public url?: string,
        public location?: string,
        public creationDate?: Date,
        public dates?: [Date],
        public userId?: string   
    ){}
}