import { showResults, clearResults } from "./display.js";
import { Character, Movie, MovieResultApi, PeopleResultApi, SearchResultApi } from "./interfaces.js";

const server = "https://api.themoviedb.org/3/";
const apiKey = 'aeb19f32c3d862ba3c7464891bf9beff';

const getSearchUrl = (value: string) => `${server}search/movie?api_key=${apiKey}&query=${value}`;
const getMovieUrl = (movieId: number) => `${server}movie/${movieId}?api_key=${apiKey}`;
const getPeopleUrl = (movieId: number) => `${server}movie/${movieId}/credits?api_key=${apiKey}`;

const getJsonData = (url: string) => fetch(url).then(response => response.json());

const search = async (value: string) => {
    const url = getSearchUrl(value);
    const data = await getJsonData(url);

    if (data.results.length === 0) throw Error("Not found");
    
    const resultMovie = data.results[0];
    const movieUrl = getMovieUrl(resultMovie.id);
    const peopleUrl = getPeopleUrl(resultMovie.id);

    const dataPromise: Promise<MovieResultApi> = getJsonData(movieUrl);
    const peoplePromise: Promise<PeopleResultApi> = getJsonData(peopleUrl);
    const [movieData, peopleData] = await Promise.all([dataPromise, peoplePromise]);

    peopleData.cast.sort((f, s) => f.order - s.order);
    const mainActors = peopleData.cast.slice(0, 6);
    const characters: Character[] = mainActors.map(actor => ({
        name: actor.character,
        actor: actor.name,
        image: actor.profile_path
    }));
    
    const directors = peopleData.crew
        .filter(person => person.department === "Directing" && person.job === "Director")
        .map(person_1 => person_1.name);
    const directedBy = directors.join(" & ");
    
    const writers = peopleData.crew
        .filter(person_2 => person_2.department === "Writing" && person_2.job === "Writer")
        .map(person_3 => person_3.name);
    const writtenBy = writers.join(" & ");

    const movie: Movie = {
        id: movieData.id,
        title: movieData.title,
        tagline: movieData.tagline,
        releaseDate: new Date(movieData.release_date),
        posterUrl: movieData.poster_path,
        backdropUrl: movieData.backdrop_path,
        overview: movieData.overview,
        runtime: movieData.runtime,
        characters: characters,
        directedBy: directedBy,
        writenBy: writtenBy
    };
    return movie;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search")!.addEventListener("click", async () => {
        const movieInput = document.getElementById("title") as HTMLInputElement;
        const movieTitle = movieInput.value;
        
        try {
            const movie = await search(movieTitle)
            showResults(movie);
        } catch(error: any) {
            clearResults(movieTitle);
        }
    });

    document.getElementById("title")!.addEventListener("keyup", (event) => {
    if (event.key !== "Enter") {
        return;
    }
    document.getElementById("search")!.click();
    event.preventDefault();
    });
});
