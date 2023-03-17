// https://openlibrary.org/authors/OL33146A.json - Franz Kafka

import { OpenlibraryAuthor } from "./OpenLibraryAuthor";

const xhr = new XMLHttpRequest();
const url = "https://openlibrary.org/authors/OL33146A.json";
xhr.open("GET", url);

xhr.send();

const showData = () => {
    if (xhr.status != 200) {
        console.log(`Status code ${xhr.status}: ${xhr.statusText}`);
    } else {
        const response: OpenlibraryAuthor = JSON.parse(xhr.response);
        const body = document.getElementsByTagName("body")[0];

        const image = document.createElement("img");
        image.src = `http://covers.openlibrary.org/a/id/${response.photos[0]}-M.jpg`;
        body.appendChild(image);

        const name = document.createElement("h1");
        name.innerHTML = response.personal_name;
        body.appendChild(name);
    }    
}
xhr.onload = showData;