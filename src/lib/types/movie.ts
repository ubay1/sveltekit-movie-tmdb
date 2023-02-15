/* eslint-disable @typescript-eslint/no-explicit-any */
interface ICast {
	adult: boolean;
	cast_id: number;
	character: string;
	credit_id: string;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	order: number;
	original_name: string;
	popularity: number;
	profile_path: string;
}
interface ICrew {
	adult: boolean;
	credit_id: string;
	department: string;
	gender: number;
	id: number;
	job: string;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
}

export interface IDetailMovie {
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
	budget: number;
	revenue: number;
	genres: [
		{
			id: number;
			name: string;
		}
	];
	spoken_languages: string[];
	status: string;
	production_companies: string[];
	credits: {
		cast: ICast[];
		crew: ICrew[];
	};
	images: {
		posters: any[];
		backdrops: any[];
		logos: any[];
	};
	videos: {
		results: [
			{
				site: string;
				key: string;
			}
		];
	};
}

export interface IDetailTv {
	backdrop_path: string;
	credits: {
		cast: ICast[];
		crew: ICrew[];
	};
	episode_run_time: number[];
	first_air_date: string;
	genres: [
		{
			id: number;
			name: string;
		}
	];
	id: number;
	images: string[];
	name: string;
	poster_path?: string;
	overview: string;
	popularity: number;
	vote_average: number;
	vote_count: number;
	budget: number;
	revenue: number;
	spoken_languages: string[];
	status: string;
	production_companies: string[];
	videos: string[];
}

export interface IBannerRecommendations {
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
}

export interface IListMovie {
	id: number;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	media_type?: string;
	original_title?: string;
}

export interface IListTv {
	id: number;
	overview: string;
	popularity: number;
	poster_path: string;
	first_air_date: string;
	name: string;
	vote_average: number;
	vote_count: number;
	media_type?: string;
	original_name?: string;
}

export interface IContentFromMovie {
	first_movie_popular?: {
		data: IDetailMovie[];
	};
	list_movie_popular?: {
		data: IListMovie[];
	};
	list_tv_popular?: {
		data: IListTv[];
	};
}
