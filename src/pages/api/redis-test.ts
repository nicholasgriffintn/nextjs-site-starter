import type { NextApiRequest, NextApiResponse } from 'next';

import { redisCache } from '$src/server/redis';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
	await redisCache.set('test', 'hello!');
	const redisTest = await redisCache.get('test2');

	console.log(redisTest);

	return res.status(200).json({ response: redisTest });
}
