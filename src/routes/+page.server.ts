/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const params = `api_key=${
			import.meta.env.VITE_SECRET_API_KEY_V3
		}&language=en-US&append_to_response=videos,images,credits,external_ids,release_dates&include_image_language=en`;

		const urlListMoviePopular = `${import.meta.env.VITE_SECRET_API_URL}/movie/popular?${params}`;
		const urlListTvPopular = `${import.meta.env.VITE_SECRET_API_URL}/tv/popular?${params}`;
		const resposeListMovie = await fetch(urlListMoviePopular);
		const resposeListTv = await fetch(urlListTvPopular);

		const jsonListMovie: { page: string; results: any } = await resposeListMovie.json();
		const jsonListTv: { page: string; results: any } = await resposeListTv.json();

		let jsonDetailMovie = [];

		if (jsonListMovie) {
			const urlBannerPopular = `${import.meta.env.VITE_SECRET_API_URL}/movie/${
				jsonListMovie.results[0].id
			}?${params}`;
			const resposeBanner = await fetch(urlBannerPopular);
			const data = await resposeBanner.json();
			jsonDetailMovie = data;
		}
		return {
			banner: jsonDetailMovie,
			list_movie_popular: jsonListMovie.results,
			list_tv_popular: jsonListTv.results
		};
	} catch (error) {
		console.log(error);
		throw new Error('error get list movie popular');
	}
};
