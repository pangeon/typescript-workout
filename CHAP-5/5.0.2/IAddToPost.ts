import {TBlogPost} from "./TBlogPost";

export interface IAddToPost {
    (content: TBlogPost): TBlogPost [];
}