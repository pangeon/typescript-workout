import { Movie } from './Movie';

const movies: Movie[] = [
    { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont', productionYear: 1994, IMDbRating: 9.2 },
    { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', productionYear: 1972, IMDbRating: 9.1 },
    { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan', productionYear: 2008, IMDbRating: 9.0 },
    { id: 4, title: '12 Angry Men', director: 'Sidney Lumet', productionYear: 1957, IMDbRating: 8.9 },
    { id: 5, title: 'Schindler\'s List', director: 'Steven Spielberg', productionYear: 1993, IMDbRating: 8.9 },
    { id: 6, title: 'The Lord of the Rings: The Return of the King', director: 'Peter Jackson', productionYear: 2003, IMDbRating: 8.9 },
    { id: 7, title: 'Pulp Fiction', director: 'Quentin Tarantino', productionYear: 1994, IMDbRating: 8.9 },
    { id: 8, title: 'The Good, the Bad and the Ugly', director: 'Sergio Leone', productionYear: 1966, IMDbRating: 8.8 },
    { id: 9, title: 'Fight Club', director: 'David Fincher', productionYear: 1999, IMDbRating: 8.8 },
    { id: 10, title: 'Forrest Gump', director: 'Robert Zemeckis', productionYear: 1994, IMDbRating: 8.8 },
    { id: 11, title: 'The Room', director: 'Tommy Wiseau', productionYear: 2003, IMDbRating: 3.7},
    { id: 12, title: 'Birdemic: Shock and Terror', director: 'James Nguyen', productionYear: 2010, IMDbRating: 1.8},
    { id: 13, title: 'Troll 2', director: 'Claudio Fragasso', productionYear: 1990, IMDbRating: 2.9},
    { id: 14, title: 'Disaster Movie', director: 'Jason Friedberg', productionYear: 2008, IMDbRating: 1.9},
    { id: 15, title: 'Gigli', director: 'Martin Brest', productionYear: 2003, IMDbRating: 2.5},
    { id: 16, title: 'Catwoman', director: 'Pitof', productionYear: 2004, IMDbRating: 3.4},
    { id: 17, title: 'One Flew Over the Cuckoo\'s Nest', director: 'Milos Forman', productionYear: 1975, IMDbRating: 8.7},
    { id: 18, title: 'Se7en', director: 'David Fincher', productionYear: 1995, IMDbRating: 8.6},
];

function getAvarageRating(movies: Movie[]): number {
    let sum: number = 0;
    movies.forEach(movie => sum += movie.IMDbRating);
    return sum / movies.length; 
}
function getAvarageRatingMovieFromYear(movies: Movie[], productionYear: number) {
    let sum: number = 0;
    const moviesFromYear = movies.filter(movie => movie.productionYear == productionYear);
    moviesFromYear.forEach(movie => sum += movie.IMDbRating);
    return sum / moviesFromYear.length; 
}

function mapToRatingsArr(): (value: Movie, index: number, array: Movie[]) => number {
    return movie => movie.IMDbRating;
}

function getMovieSinceYear(productionYear: number): (value: Movie, index: number, array: Movie[]) => void {
    return movie => movie.productionYear >= productionYear;
}

function getAvarageRatingMovieSinceYear(movies: Movie[], productionYear: number) {
    const moviesRates = movies
        .filter(getMovieSinceYear(productionYear)) // movies since productionYear
        .map(mapToRatingsArr()); // get ratings table from movies since productionYear
    
        // sum ratings table from movies since productionYear and devide by sum ratings table size 
        return moviesRates.reduce((sum, item) => sum + item, 0) / moviesRates.length;
}
console.log(getAvarageRating(movies));
console.log(getAvarageRatingMovieFromYear(movies, 1994));
console.log(getAvarageRatingMovieSinceYear(movies, 1994));
console.log(getAvarageRatingMovieSinceYear(movies, 2000));



