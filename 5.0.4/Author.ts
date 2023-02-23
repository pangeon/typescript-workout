import {WordpressUser} from "./WordpressUser";

export class Author extends WordpressUser {
    publishedPostsTitles: string [] = [];

    constructor(userName: string, token: string, publishedPostsTitles: string[]) {
        super(userName, token);
        this.publishedPostsTitles = publishedPostsTitles;
    }
}