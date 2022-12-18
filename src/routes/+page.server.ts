import type { PageServerLoad } from './$types';

async function GetListMoviePopular() {
	try {
		const moviePopularFirst = await fetch('http://localhost:3000/list_movie_popular', {
			method: 'GET'
		});

		return moviePopularFirst.json();
	} catch (error) {
		throw new Error('error get api movie');
	}
}
async function GetFirstMoviePopular() {
	try {
		const moviePopularFirst = await fetch('http://localhost:3000/movie_popular/first', {
			method: 'GET'
		});

		return moviePopularFirst.json();
	} catch (error) {
		console.log(error);
	}
}
export const load: PageServerLoad = async () => {
	const tempListMoviePopular: string[] = [];
	const tempFirstMoviePopular: string[] = [];
	await Promise.all([GetListMoviePopular(), GetFirstMoviePopular()]).then((values) => {
		tempListMoviePopular.push(values[0]);
		tempFirstMoviePopular.push(values[1]);
	});

	return {
		list_movie_popular: tempListMoviePopular[0],
		first_movie_popular: tempFirstMoviePopular[0]
	};
};
