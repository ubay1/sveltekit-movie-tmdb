export type TypeMovie = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type TypeContentFromMovie = {
	list_movie_popular?: {
		data: TypeMovie[];
	};
	first_movie_popular?: {
		data: TypeMovie[];
	};
};
