export interface SearchResultApi {
    page: number,
    results: {
        id: number,
        title: string;
    }[]
}

export interface MovieResultApi {
    id: number;
    backdrop_path: string;
    overview: string;
    poster_path: string;
    release_date: string;
    tagline: string;
    title: string;
    runtime:number;
}

export interface PeopleResultApi {
    id: number;
    cast: CastResultApi[];
    crew: CrewResultApi[]
}

export interface PersonResultApi {
    id: number,
    name: string;
}

export interface CastResultApi extends PersonResultApi {
    order: number;
    character: string;
    profile_path: string;
}

export interface CrewResultApi extends PersonResultApi {
    department: string;
    job: string;
}

export interface Movie {
    id: number;
    title: string;
    tagline: string;
    releaseDate: Date;
    posterUrl: string;
    backdropUrl: string;
    overview: string;
    runtime: number;
    characters: Character[];
    directedBy: string;
    writenBy: string;
}

export interface Character {
    name: string;
    actor: string;
    image: string;
}
