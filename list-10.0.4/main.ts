// https://openlibrary.org/authors/OL33146A.json - Franz Kafka

import { OpenlibraryAuthor } from "./OpenLibraryAuthor.js";
import { addHTMLToBody } from "./utils.js";

function getAuthorData() {
    return new Promise<OpenlibraryAuthor>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = "https://openlibrary.org/authors/OL33146A.json";
        
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status != 200) {
                reject({
                    error: xhr.status,
                    message: xhr.statusText
                });
            } else {
                const response: OpenlibraryAuthor = JSON.parse(xhr.response);
                resolve(response);
            }
        }
    });
}

getAuthorData()
    .then(author => {
        addHTMLToBody("img", `http://covers.openlibrary.org/a/id/${author.photos[0]}-M.jpg`, "src");
        addHTMLToBody("h1", author.personal_name);

    }).catch(error => {
        console.log(`Status code ${error.error}: ${error.message}`);
    })