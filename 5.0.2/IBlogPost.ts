import {TBlogPost} from "./TBlogPost";
import {IAddToPost} from "./IAddToPost";

export interface IBlogPost {
    allPost: TBlogPost[];
    addToPost: IAddToPost;
}