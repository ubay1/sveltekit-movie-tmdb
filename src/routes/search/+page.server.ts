import type { Actions } from '../$types';

export const actions: Actions = {
	search: async ({ request }) => {
		const data = await request.formData();
		const curr_page = data.get('curr_page');
		const value = data.get('search');

		const params = `api_key=${
			import.meta.env.VITE_SECRET_API_KEY_V3
		}&language=en-US&query=${value}&page=${curr_page}&include_adult=false`;
		const urlSearch = `${import.meta.env.VITE_SECRET_API_URL}/search/multi?${params}`;

		const responseSearch = await (await fetch(urlSearch)).json();

		// console.log(responseSearch);

		return {
			total_pages: responseSearch.total_pages,
			data: responseSearch.results
		};
	}
};
