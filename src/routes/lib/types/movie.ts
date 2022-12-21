export type TypeBannerMovie = {
	backdrop_path: string;
	poster_path?: string;
	id: number;
	overview: string;
	popularity: number;
	release_date: string;
	runtime: number;
	title: string;
	vote_average: number;
	vote_count: number;
};

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

export type TypeListTv = {
	id: number;
	overview: string;
	popularity: number;
	poster_path: string;
	first_air_date: string;
	name: string;
	vote_average: number;
	vote_count: number;
};

export type TypeContentFromMovie = {
	first_movie_popular?: {
		data: TypeBannerMovie[];
	};
	list_movie_popular?: {
		data: TypeListMovie[];
	};
	list_tv_popular?: {
		data: TypeListTv[];
	};
};
