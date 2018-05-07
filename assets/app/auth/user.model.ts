export class User {
    constructor(
        public username: string, 
        public password: string,
        public email?: string,
        public name?: string,
        public bio?: string,
        public socialMedia?: [string],
        public picture?: string,
        public role?: string,
        public newsPosts?: [string]
    ) { }
}