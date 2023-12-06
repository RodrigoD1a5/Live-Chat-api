import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";
import fastifySocketIO from "fastify-socket.io";

import { envs } from "./lib/envs";
import { socketIo } from "./routes/socket-io";
import { usersRoute } from "./routes/users-route";

const app = fastify();
app.register(fastifySocketIO, {
    cors: { origin: "*" },
});

app.register(fastifyJwt, {
    secret: envs.JWT_SECRET,
});

app.register(usersRoute);
app.register(socketIo);

export { app };