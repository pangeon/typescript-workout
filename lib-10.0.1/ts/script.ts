import { addHTMLToBody, clearResult, showResult} from "./display.js";
import { CastResultApi, MovieResultApi, PeopleResultApi, SearchResultApi, Character } from "./interfaces.js";

const apiKey = "aeb19f32c3d862ba3c7464891bf9beff";
const domain = "https://api.themoviedb.org";
const apiVersion = 3;

const getSearchUrl = (query: string): string => `${domain}/${apiVersion}/search/movie?api_key=${apiKey}&query=${query}`;
const getMovieUrl = (movieId: number): string => `${domain}/${apiVersion}/movie/${movieId}?api_key=${apiKey}`;
const getPeopleUrl = (movieId: number): string => `${domain}/${apiVersion}/movie/${movieId}/credits?api_key=${apiKey}`;

function search(query: string): void {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", getSearchUrl(query));
    xhr.send();
    xhr.onload = () => {
        if(xhr.status != 200) {
            console.log(`Status code ${xhr.status}: ${xhr.statusText}`);
        } else {
            const response: SearchResultApi  = JSON.parse(xhr.response);
            if (response === null) {
                clearResult();
            } else {
                const result: SearchResultApi = response;
                console.log(result);
            } 
        }
    }
}

function showMovie(id: number): void {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", getMovieUrl(id));
    xhr.send();
    xhr.onload = () => {
        if(xhr.status != 200) {
            console.log(`Status code ${xhr.status}: ${xhr.statusText}`);
        } else {
            const response: MovieResultApi = JSON.parse(xhr.response);
            addHTMLToBody("h2", response.title);
            addHTMLToBody("h4", response.release_date);
            addHTMLToBody("p", response.overview);
            addHTMLToBody("img", `http://image.tmdb.org/t/p/w500/${response.poster_path}`, "src");
            // const body = document.getElementsByTagName("body")[0];
            // const img = document.createElement("img");
            // img.setAttribute("src", `http://image.tmdb.org/t/p/w500/${response.poster_path}`);
            // body.appendChild(img);
            
        }
    }
}

function showMovieCredits(id: number): void {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", getPeopleUrl(id));
    xhr.send();
    xhr.onload = () => {
        if(xhr.status != 200) {
            console.log(`Status code ${xhr.status}: ${xhr.statusText}`);
        } else {
            const response: PeopleResultApi = JSON.parse(xhr.response);
            response.cast.sort((f, s) => f.order - s.order).slice(0, 6);
            const castArray = response.cast.slice(0, 6);

            const characters: Character[] = castArray.map(
            actor => (
                        {
                            name: actor.character,
                            actor: actor.name,
                            image: actor.profile_path
                        }
                    )
            )

            const directors = response.crew
                .filter(person => person.department === "Directing" && person.job === "Director")
                .map(person => person.name);
            const directedBy = directors.join(" & ");

            const writers = response.crew
                .filter(person => person.department === "Writing" && person.job === "Writer")
                .map(person => person.name);
            const writedBy = writers.join(" & ");

            addHTMLToBody("h3", `Directed by: ${directedBy}`);
            addHTMLToBody("h3", `Writed by: ${writedBy}`);

            for(let i = 0; i <= 6; i++) addHTMLToBody("div", `${characters[i].actor} as ${characters[i].name}`);
                                  
        }
    }
}

showMovieCredits(300);
showMovie(300);
search("T");