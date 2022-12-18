import { handler } from './build/handler.js';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import apicache from 'apicache';

dotenv.config();

const app = express();
let cache = apicache.middleware;

app.get('/movie_popular/first', cache('1 day'), async (req, res) => {
	// console.log(req.query.id);
	const params = `api_key=${process.env.SECRET_API_KEY_V3}&language=en-US`;
	try {
		const response = await fetch(
			`${process.env.SECRET_API_URL}/movie/${Number(req.query.id)}?${params}`,
			{
				method: 'GET'
			}
		);

		const toJson = await response.json();

		res.json({ data: [toJson] });
	} catch (error) {
		console.log(error);
	}
});

app.get('/list_movie_popular', cache('1 day'), async (req, res) => {
	const params = `api_key=${process.env.SECRET_API_KEY_V3}&language=en-US&page=1`;
	try {
		const response = await fetch(`${process.env.SECRET_API_URL}/movie/popular?${params}`, {
			method: 'GET'
		});

		const toJson = await response.json();

		res.json({ data: toJson.results });
	} catch (error) {
		console.log(error);
	}
});

app.use(handler);
app.use(bodyParser.json());
app.listen(3000, () => {
	console.log('listening on port 3000');
});
