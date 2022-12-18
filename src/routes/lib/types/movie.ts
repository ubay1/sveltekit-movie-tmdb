export type TypeListMovie = {
	id: number;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type TypeBannerMovie = {
	backdrop_path: string;
	id: number;
	overview: string;
	popularity: number;
	release_date: string;
	runtime: number;
	title: string;
	vote_average: number;
	vote_count: number;
};

export type TypeContentFromMovie = {
	list_movie_popular?: {
		data: TypeListMovie[];
	};
	first_movie_popular?: {
		data: TypeBannerMovie[];
	};
};
