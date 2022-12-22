export type TypeDetailMovie = {
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

export type TypeDetailTv = {
	backdrop_path: string;
	poster_path?: string;
	id: number;
	overview: string;
	popularity: number;
	release_date: string;
	episode_run_time: number[];
	name: string;
	vote_average: number;
	vote_count: number;
	list_images_backdrop: string[];
	list_images_poster: string[];
	list_videos: string[];
};

export type TypeBannerRecommendations = {
	adult: boolean;
	backdrop_path: string;
	id: number;
	title: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
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
		data: TypeDetailMovie[];
	};
	list_movie_popular?: {
		data: TypeListMovie[];
	};
	list_tv_popular?: {
		data: TypeListTv[];
	};
};
