import {BlogPostClass} from "./BlogPostClass";
import {TBlogPost} from "./TBlogPost";

const blogSite = new BlogPostClass();
let post1: TBlogPost = {
    content: `Learn TypeScript programming language OOP design pattern - types, interfaces, classes`,
    timeStamp: 20230222,
    user: `Kamil Cecherz`
}

let post2: TBlogPost = {
    content: `Stop learning C++ because is difficult and complicated.`,
    timeStamp: 20220710,
    user: `Robert Johnson`
}

let post3: TBlogPost = {
    content: `End job as intern in Dianet.`,
    timeStamp: 20210610,
    user: `Brian Pea`
}

blogSite.addToPost(post1);
blogSite.addToPost(post2);
blogSite.addToPost(post3);

console.log(blogSite.allPost);