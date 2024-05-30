/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
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

		let finalBanner: any;
		const finalTvPopular: any[] = [];
		const finalTvTopRated: any[] = [];

		if (jsonListTvPopular) {
			const urlBannerPopular = `${import.meta.env.VITE_SECRET_API_URL}/tv/${
				jsonListTvPopular.results[0].id
			}?${params}`;
			const resposeBanner = await fetch(urlBannerPopular);
			const data = await resposeBanner.json();
			finalBanner = data;
			jsonListTvPopular.results.forEach((tv: any) => {
				tv.id_movie = `id-popular-tv-${tv.id}`;
				finalTvPopular.push(tv);
			});
			jsonListTvTopRated.results.forEach((tv: any) => {
				tv.id_movie = `id-toprated-tv-${tv.id}`;
				finalTvTopRated.push(tv);
			});
		}
		return {
			banner: {
				backdrop_path: finalBanner.backdrop_path,
				poster_path: finalBanner.poster_path,
				id: finalBanner.id,
				id_movie: `id-tv-banner-${finalBanner.id}`,
				overview: finalBanner.overview,
				popularity: finalBanner.popularity,
				release_date: finalBanner.first_air_date,
				runtime: finalBanner.episode_run_time.length === 0 ? 0 : finalBanner.episode_run_time,
				title: finalBanner.name,
				vote_average: finalBanner.vote_average,
				vote_count: finalBanner.vote_count,
				budget: 0,
				revenue: 0,
				genres: finalBanner.genres,
				spoken_languages: finalBanner.spoken_languages,
				status: finalBanner.status,
				production_companies: finalBanner.production_companies,
				credits: finalBanner.credits,
				images: finalBanner.images,
				videos: finalBanner.videos
			},
			list_tv_popular: finalTvPopular,
			list_tv_top_rated: finalTvTopRated
		};
	} catch (error) {
		console.log(error);
		throw new Error('error get list movie popular');
	}
};
