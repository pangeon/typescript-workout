import {WordpressUser} from "./WordpressUser";

export class Subscriber extends WordpressUser {
    readPosts: number = 0;
    postComments: number = 0;

    setProperties(readPosts: number, postComments: number) {
        this.readPosts = readPosts;
        this.postComments = postComments;
    }
}