import { createClient, RedisClientType } from "@redis/client";

const client: RedisClientType = createClient({
    password: process.env.REDIS_PW,
    socket: {
        host: process.env.REDIS_HOST,
        port: 17356,
    },
});

export default client;
