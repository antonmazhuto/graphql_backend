// Core
import http from "http";

// Express App
import { app } from "./app";

// Middleware
import './applyMiddleware';

// Apollo Server
import { apolloServer } from "./apolloServer";

const server = http.createServer(app);
apolloServer.installSubscriptionHandlers(server);

export { server, apolloServer }
