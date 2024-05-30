/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
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

		let finalBanner = [];
		const finalMoviePopular: any[] = [];
		const finalMovieTopRated: any[] = [];
		const finalMovieUpComing: any[] = [];
		const finalMovieNowPlaying: any[] = [];

		if (jsonListMoviePopular) {
			const urlBannerPopular = `${import.meta.env.VITE_SECRET_API_URL}/movie/${
				jsonListMoviePopular.results[0].id
			}?${params}`;
			const resposeBanner = await fetch(urlBannerPopular);
			const data = await resposeBanner.json();
			finalBanner = data;
			finalBanner.id_movie = `id-movie-banner-${finalBanner.id}`;
			jsonListMoviePopular.results.forEach((movie: any) => {
				movie.id_movie = `id-popular-movie-${movie.id}`;
				finalMoviePopular.push(movie);
			});
			jsonListMovieTopRated.results.forEach((movie: any) => {
				movie.id_movie = `id-toprated-movie-${movie.id}`;
				finalMovieTopRated.push(movie);
			});
			jsonListMovieUpComing.results.forEach((movie: any) => {
				movie.id_movie = `id-upcoming-movie-${movie.id}`;
				finalMovieUpComing.push(movie);
			});
			jsonListMovieNowPlaying.results.forEach((movie: any) => {
				movie.id_movie = `id-nowplaying-movie-${movie.id}`;
				finalMovieNowPlaying.push(movie);
			});
		}
		return {
			banner: finalBanner,
			list_movie_popular: finalMoviePopular,
			list_movie_top_rated: finalMovieTopRated,
			list_movie_upcoming: finalMovieUpComing,
			list_movie_now_playing: finalMovieNowPlaying
		};
	} catch (error) {
		console.log(error);
		throw new Error('error get list movie popular');
	}
};
