/* eslint-disable @typescript-eslint/no-explicit-any */
import { swr } from '@svelte-drama/swr';
import { suspend, refreshOnFocus, refreshOnReconnect } from '@svelte-drama/swr/plugin';
import type { TypeBannerMovie, TypeListMovie } from '../types/movie';
// import { PUBLIC_IMAGE_URL } from '$env/static/public';

const params = `api_key=${import.meta.env.VITE_SECRET_API_KEY_V3}&language=en-US`;

export function getFirstMoviePopular(id: number) {
	const url = `${import.meta.env.VITE_SECRET_API_URL}/movie/${id}?${params}`;
	const { data } = swr(url, {
		async fetcher(url) {
			const movie: TypeBannerMovie = await fetch(url).then((r) => r.json());
			console.log('movie first =  ', movie);

			return {
				data: [
					{
						backdrop_path: movie.backdrop_path,
						id: movie.id,
						overview: movie.overview,
						popularity: movie.popularity,
						release_date: movie.release_date,
						runtime: movie.runtime,
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
				results: TypeListMovie[];
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
				results: TypeListMovie[];
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
