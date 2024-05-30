import type { PageLoad } from './$types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const load: PageLoad = async () => {
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

		let finalBanner = [];
		const finalMovie: any[] = [];
		const finalTv: any[] = [];

		if (jsonListMovie) {
			const urlBannerPopular = `${import.meta.env.VITE_SECRET_API_URL}/movie/${
				jsonListMovie.results[0].id
			}?${params}`;
			const resposeBanner = await fetch(urlBannerPopular);
			const data = await resposeBanner.json();
			finalBanner = data;
			finalBanner.id_movie = `id-home-banner-${finalBanner.id}`;
			jsonListMovie.results.forEach((movie: any) => {
				movie.id_movie = `id-home-movie-${movie.id}`;
				finalMovie.push(movie);
			});
			jsonListTv.results.forEach((tv: any) => {
				tv.id_movie = `id-home-tv-${tv.id}`;
				finalTv.push(tv);
			});
		}
		return {
			banner: finalBanner,
			list_movie_popular: finalMovie,
			list_tv_popular: finalTv
		};
	} catch (error) {
		console.log(error);
		throw new Error('error get list movie popular');
	}
};
