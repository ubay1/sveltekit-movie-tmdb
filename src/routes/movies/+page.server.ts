/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const params = `api_key=${
			import.meta.env.VITE_SECRET_API_KEY_V3
		}&language=en-US&append_to_response=videos,images,credits,external_ids,release_dates&include_image_language=en`;

		const urlListMoviePopular = `${import.meta.env.VITE_SECRET_API_URL}/movie/popular?${params}`;
		const urlListMovieTopRated = `${import.meta.env.VITE_SECRET_API_URL}/movie/top_rated?${params}`;
		const urlListMovieUpComing = `${import.meta.env.VITE_SECRET_API_URL}/movie/upcoming?${params}`;
		const urlListMovieNowPlaying = `${
			import.meta.env.VITE_SECRET_API_URL
		}/movie/now_playing?${params}`;
		const resposeListMoviePopular = await fetch(urlListMoviePopular);
		const resposeListMovieTopRated = await fetch(urlListMovieTopRated);
		const resposeListMovieUpComing = await fetch(urlListMovieUpComing);
		const resposeListMovieNowPlaying = await fetch(urlListMovieNowPlaying);

		const jsonListMoviePopular: { page: string; results: any } =
			await resposeListMoviePopular.json();
		const jsonListMovieTopRated: { page: string; results: any } =
			await resposeListMovieTopRated.json();
		const jsonListMovieUpComing: { page: string; results: any } =
			await resposeListMovieUpComing.json();
		const jsonListMovieNowPlaying: { page: string; results: any } =
			await resposeListMovieNowPlaying.json();

		let jsonDetailMovie = [];

		if (jsonListMoviePopular) {
			const urlBannerPopular = `${import.meta.env.VITE_SECRET_API_URL}/movie/${
				jsonListMoviePopular.results[0].id
			}?${params}`;
			const resposeBanner = await fetch(urlBannerPopular);
			const data = await resposeBanner.json();
			jsonDetailMovie = data;
		}
		return {
			banner: jsonDetailMovie,
			list_movie_popular: jsonListMoviePopular.results,
			list_movie_top_rated: jsonListMovieTopRated.results,
			list_movie_upcoming: jsonListMovieUpComing.results,
			list_movie_now_playing: jsonListMovieNowPlaying.results
		};
	} catch (error) {
		console.log(error);
		throw new Error('error get list movie popular');
	}
};
