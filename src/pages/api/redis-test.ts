import type { NextApiRequest, NextApiResponse } from 'next';

import { redisCache } from '$src/server/redis';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
	await redisCache.set('test', 'Hello from Redis!');
	const redisTest = await redisCache.get('test');

	console.log(redisTest);

	return res.status(200).json({ response: redisTest });
}
