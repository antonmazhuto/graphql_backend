//Server
import { server } from "./init/server";

// Config
import { PORT } from "./init/config";

// Endpoints
import { graphqlPath, subscriptionsPath } from './init/apolloServer';

server.listen(PORT, () => {
    console.log(`👻👻👻 Server ready at http://localhost:${PORT}${graphqlPath}`);
    console.log(`👻👻👻 Subscriptions ready at ws://localhost:${PORT}${subscriptionsPath}`);
});
