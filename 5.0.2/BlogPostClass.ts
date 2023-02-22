import {IBlogPost} from "./IBlogPost";
import {TBlogPost} from "./TBlogPost";

export class BlogPostClass implements IBlogPost {
    allPost: TBlogPost [] = [];
    addToPost(content: TBlogPost): TBlogPost[] {
        this.allPost = [
            ...this.allPost,
            content
        ];
        return this.allPost;
    }
}

