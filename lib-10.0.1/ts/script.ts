/*  
Klucz API (v3 auth): aeb19f32c3d862ba3c7464891bf9beff

Przykład zapytania API: 
https://api.themoviedb.org/3/movie/550?api_key=aeb19f32c3d862ba3c7464891bf9beff

Przeczytaj kod odczytu API (v4 auth):
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWIxOWYzMmMzZDg2MmJhM2M3NDY0ODkxYmY5YmVmZiIsIn
N1YiI6IjY0MTRjYWI1ZTc0MTQ2MDBiOTZhMDRkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjox
fQ.jeS7bGkRfXJDUFjnaSAI52SEOJiOcHivtOTzlPWTwkI

*/

const apiKey = "aeb19f32c3d862ba3c7464891bf9beff";
const domain = "https://api.themoviedb.org";
const apiVersion = 3;

const getSearchUrl = (query: string): string => `${domain}/${apiVersion}/search/movie?api_key=${apiKey}&query=${query}`;
const getMovieUrl = (movieId: number): string => `${domain}/${apiVersion}/movie/${movieId}?api_key=${apiKey}`;
const getPeopleUrl = (movieId: number): string => `${domain}/${apiVersion}/movie/${movieId}/credits?api_key=${apiKey}`;

function search() {
    console.log("No implemented yet");
}