// Query
import { queries as booksQueries } from "../bus/books/queries";
import { queries as strarshipsQueries} from "../bus/starships/queries";
import { queries as usersQueries } from "../bus/users/queries";

// Mutation
import { mutations as booksMutations} from "../bus/books/mutations";
import { mutations as usersMutations } from "../bus/users/mutations";

export const resolvers = {
    Query: {
        ...booksQueries,
        ...strarshipsQueries,
        ...usersQueries
    },
    Mutation: {
        ...booksMutations,
        ...usersMutations
    }
};
