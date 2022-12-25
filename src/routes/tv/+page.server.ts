/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const params = `api_key=${
			import.meta.env.VITE_SECRET_API_KEY_V3
		}&language=en-US&append_to_response=videos,images,credits,external_ids,release_dates&include_image_language=en`;

		const urlListTvPopular = `${import.meta.env.VITE_SECRET_API_URL}/tv/popular?${params}`;
		const urlListTvTopRated = `${import.meta.env.VITE_SECRET_API_URL}/tv/top_rated?${params}`;
		const resposeListMoviePopular = await fetch(urlListTvPopular);
		const resposeListMovieTopRated = await fetch(urlListTvTopRated);

		const jsonListTvPopular: { page: string; results: any } = await resposeListMoviePopular.json();
		const jsonListTvTopRated: { page: string; results: any } =
			await resposeListMovieTopRated.json();

		let jsonDetailTv = [];

		if (jsonListTvPopular) {
			const urlBannerPopular = `${import.meta.env.VITE_SECRET_API_URL}/tv/${
				jsonListTvPopular.results[0].id
			}?${params}`;
			const resposeBanner = await fetch(urlBannerPopular);
			const data = await resposeBanner.json();
			jsonDetailTv = data;
		}
		return {
			banner: {
				backdrop_path: jsonDetailTv.backdrop_path,
				poster_path: jsonDetailTv.poster_path,
				id: jsonDetailTv.id,
				overview: jsonDetailTv.overview,
				popularity: jsonDetailTv.popularity,
				release_date: jsonDetailTv.first_air_date,
				runtime: jsonDetailTv.episode_run_time.length === 0 ? 0 : jsonDetailTv.episode_run_time,
				title: jsonDetailTv.name,
				vote_average: jsonDetailTv.vote_average,
				vote_count: jsonDetailTv.vote_count,
				budget: 0,
				revenue: 0,
				genres: jsonDetailTv.genres,
				spoken_languages: jsonDetailTv.spoken_languages,
				status: jsonDetailTv.status,
				production_companies: jsonDetailTv.production_companies,
				credits: jsonDetailTv.credits,
				images: jsonDetailTv.images,
				videos: jsonDetailTv.videos
			},
			list_tv_popular: jsonListTvPopular.results,
			list_tv_top_rated: jsonListTvTopRated.results
		};
	} catch (error) {
		console.log(error);
		throw new Error('error get list movie popular');
	}
};
