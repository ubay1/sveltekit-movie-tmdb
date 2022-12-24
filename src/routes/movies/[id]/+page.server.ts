import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const paramApi = `api_key=${
			import.meta.env.VITE_SECRET_API_KEY_V3
		}&language=en-US&append_to_response=videos,images,credits,external_ids,release_dates&include_image_language=en`;
		const url = `${import.meta.env.VITE_SECRET_API_URL}/movie/${params.id}?${paramApi}`;
		const resposeDetailMovie = await fetch(url);
		const jsonDetailMovie = resposeDetailMovie.json();
		// console.log('detail = ', jsonDetailMovie);

		return jsonDetailMovie;
	} catch (error) {
		console.log(error);
	}
};
