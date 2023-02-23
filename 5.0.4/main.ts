import {WordpressUser} from "./WordpressUser";
import {Subscriber} from "./Subscriber";
import {Author} from "./Author";
import {Editor} from "./Editor";

console.log("Running program...\n");

const wp_user = new WordpressUser('cecherz', '112233txc');
const wp_user_subscriber = new Subscriber('mcdonald', '568744cdl');
const wp_user_author = new Author('appollo', '175463nene', [
    'Something about Java',
    'Top 10 programming trends in 2023',
    'Why IT is strange?',
    'Clojure - the best and insane'
]);
const wp_user_editor = new Editor('frozenMick', '096511yuio', [
    'The most popular IDE in 2022',
    'Config and running Apache',
    'Clean your hard disk',
    'JavaScript or TypeScript - is your choice !'
]);
wp_user_subscriber.setProperties(10, 23);
wp_user_editor.addPostAsEdited(0);


console.log(wp_user);
console.log(wp_user_subscriber);
console.log(wp_user_author);
console.log(wp_user_editor);

console.log("\nEnd program...");