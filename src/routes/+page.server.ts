import { SECRET_URL_DEV } from '$env/static/private';
import type { TypeListMovie } from 'lib/types/movie';
import type { PageServerLoad } from './$types';

async function GetFirstMoviePopular(id: number) {
	try {
		const moviePopularFirst = await fetch(`${SECRET_URL_DEV}/movie_popular/first?id=${id}`, {
			method: 'GET'
		});

		return moviePopularFirst.json();
	} catch (error) {
		console.log(error);
	}
}
async function GetListMoviePopular() {
	try {
		const moviePopularFirst = await fetch(`${SECRET_URL_DEV}/list_movie_popular`, {
			method: 'GET'
		});

		return moviePopularFirst.json();
	} catch (error) {
		throw new Error('error get api movie');
	}
}

async function GetListTvPopular() {
	try {
		const moviePopularFirst = await fetch(`${SECRET_URL_DEV}/list_tv_popular`, {
			method: 'GET'
		});

		return moviePopularFirst.json();
	} catch (error) {
		throw new Error('error get api tv');
	}
}
export const load: PageServerLoad = async () => {
	const tempFirstMoviePopular: TypeListMovie[] = [];
	const tempListMoviePopular: TypeListMovie[] = [];
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const tempListTvPopular: TypeListMovie[] = [];

	// const test = await Promise.all([GetListMoviePopular(), GetListTvPopular()]);
	// console.log(test[1]);

	try {
		const moviePopular = await GetListMoviePopular();
		const tvPopular = await GetListTvPopular();

		tempListMoviePopular.push(moviePopular);
		tempListTvPopular.push(tvPopular);

		if (moviePopular) {
			const firstMoviePopular = await GetFirstMoviePopular(moviePopular.data[0].id);
			tempFirstMoviePopular.push(firstMoviePopular);
		}
	} catch (error) {
		console.log(error);
		throw new Error('error get api');
	}

	return {
		first_movie_popular: tempFirstMoviePopular[0],
		list_movie_popular: tempListMoviePopular[0],
		list_tv_popular: tempListTvPopular[0]
	};
};
