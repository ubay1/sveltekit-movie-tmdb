import { SECRET_URL_DEV } from '$env/static/private';
import type { TypeListMovie } from 'lib/types/movie';
import type { PageServerLoad } from './$types';

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
export const load: PageServerLoad = async () => {
	const tempListMoviePopular: TypeListMovie[] = [];
	const tempFirstMoviePopular: TypeListMovie[] = [];

	try {
		const moviePopular = await GetListMoviePopular();
		tempListMoviePopular.push(moviePopular);
		if (moviePopular) {
			const firstMoviePopular = await GetFirstMoviePopular(moviePopular.data[0].id);
			tempFirstMoviePopular.push(firstMoviePopular);
		}
	} catch (error) {
		console.log(error);
		throw new Error('error get api');
	}

	return {
		list_movie_popular: tempListMoviePopular[0],
		first_movie_popular: tempFirstMoviePopular[0]
	};
};
