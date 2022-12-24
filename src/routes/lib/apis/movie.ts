/* eslint-disable @typescript-eslint/no-explicit-any */
import { swr } from '@svelte-drama/swr';
import { suspend, refreshOnFocus, refreshOnReconnect } from '@svelte-drama/swr/plugin';
import type { IDetailMovie, IBannerRecommendations, IListMovie, IDetailTv } from '../types/movie';
// import { PUBLIC_IMAGE_URL } from '$env/static/public';

const params = `api_key=${
	import.meta.env.VITE_SECRET_API_KEY_V3
}&language=en-US&append_to_response=videos,images,credits,external_ids,release_dates&include_image_language=en`;

export function getDetailMovie(id: number) {
	const url = `${import.meta.env.VITE_SECRET_API_URL}/movie/${id}?${params}`;
	const { data } = swr(url, {
		async fetcher(url) {
			const movie: IDetailMovie = await fetch(url).then((r) => r.json());
			console.log('movie detail =  ', movie);

			return {
				data: [
					{
						backdrop_path: movie.backdrop_path,
						poster_path: movie.poster_path,
						id: movie.id,
						overview: movie.overview,
						popularity: movie.popularity,
						release_date: movie.release_date,
						runtime: movie.runtime,
						title: movie.title,
						vote_average: movie.vote_average,
						vote_count: movie.vote_count,
						budget: movie.budget,
						revenue: movie.revenue,
						genres: movie.genres,
						spoken_languages: movie.spoken_languages,
						status: movie.status,
						production_companies: movie.production_companies,
						credits: movie.credits,
						images: movie.images,
						videos: movie.videos
					}
				]
			};
		},
		plugins: [suspend(), refreshOnFocus(), refreshOnReconnect()]
	});
	return data;
}

export function getDetailTv(id: number) {
	const url = `${import.meta.env.VITE_SECRET_API_URL}/tv/${id}?${params}`;
	const { data } = swr(url, {
		async fetcher(url) {
			const tv: IDetailTv = await fetch(url).then((r) => r.json());
			console.log('tv detail =  ', tv);

			return {
				data: [
					{
						backdrop_path: tv.backdrop_path,
						poster_path: tv.poster_path,
						id: tv.id,
						overview: tv.overview,
						popularity: tv.popularity,
						first_air_date: tv.first_air_date,
						runtime: tv.episode_run_time,
						title: tv.name,
						vote_average: tv.vote_average,
						vote_count: tv.vote_count,
						images: tv.images,
						videos: tv.videos
					}
				]
			};
		},
		plugins: [suspend(), refreshOnFocus(), refreshOnReconnect()]
	});
	return data;
}

export function getMovieTvRecommendations(id: number) {
	const url = `${import.meta.env.VITE_SECRET_API_URL}/recommendations/${id}?${params}`;
	const { data } = swr(url, {
		async fetcher(url) {
			const movie: IBannerRecommendations = await fetch(url).then((r) => r.json());
			console.log('movie first =  ', movie);

			return {
				data: [
					{
						backdrop_path: movie.backdrop_path,
						poster_path: movie.poster_path,
						id: movie.id,
						overview: movie.overview,
						popularity: movie.popularity,
						release_date: movie.release_date,
						title: movie.title,
						vote_average: movie.vote_average,
						vote_count: movie.vote_count
					}
				]
			};
		},
		plugins: [suspend(), refreshOnFocus(), refreshOnReconnect()]
	});
	return data;
}

export function getListMoviePopular() {
	const url = `${import.meta.env.VITE_SECRET_API_URL}/movie/popular?${params}`;

	const { data } = swr(url, {
		async fetcher(url) {
			const movie: {
				page: number;
				results: IListMovie[];
				total_pages: number;
				total_results: number;
			} = await fetch(url).then((r) => r.json());
			// console.log(movie.results);
			return {
				data: movie.results
			};
		},
		plugins: [suspend(), refreshOnFocus(), refreshOnReconnect()]
	});

	return data;
}

export function getListTvPopular() {
	const url = `${import.meta.env.VITE_SECRET_API_URL}/tv/popular?${params}`;

	const { data } = swr(url, {
		async fetcher(url) {
			const movie: {
				page: number;
				results: IListMovie[];
				total_pages: number;
				total_results: number;
			} = await fetch(url).then((r) => r.json());
			// console.log(movie.results);
			return {
				data: movie.results
			};
		},
		plugins: [suspend(), refreshOnFocus(), refreshOnReconnect()]
	});

	return data;
}
