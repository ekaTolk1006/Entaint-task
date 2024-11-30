
export interface I_MovieListParams {
    language?: string,
    page?: number,
    region?: string
}

export interface I_MovieListRes {
    page: number,
    results: Array<I_MovieData>
}

export interface I_MovieData {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}



