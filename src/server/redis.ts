import Redis from 'ioredis';

const redisClient = new Redis({
	port: process.env.REDIS_PORT || 6379,
	host: process.env.REDIS_HOST || 'localhost',
	family: 4,
	password: process.env.REDIS_PASS || undefined,
	db: 0,
});

function get<Value = unknown>(key: string): Promise<Value | null> {
	return new Promise((resolve) => {
		redisClient.get(key, (err: Error | null, result: string | null) => {
			if (err) {
				console.error(`REDIS ERROR with .get:`, err);
			}
			resolve(result ? (JSON.parse(result) as Value) : null);
		});
	});
}

function set<Value>(key: string, value: Value): Promise<'OK'> {
	return new Promise((resolve) => {
		redisClient.set(
			key,
			JSON.stringify(value),
			(err: Error | null, reply: 'OK') => {
				if (err) console.error(`REDIS ERROR with .set:`, err);
				resolve(reply);
			},
		);
	});
}

function del(key: string): Promise<string> {
	return new Promise((resolve) => {
		redisClient.del(key, (err: Error | null, result: number | null) => {
			if (err) {
				console.error(`REDIS replicaClient ERROR with .del:`, err);
				resolve('error');
			} else {
				resolve(`${key} deleted: ${result}`);
			}
		});
	});
}

const redisCache = { get, set, del, name: 'redis' };
export { get, set, del, redisCache };
