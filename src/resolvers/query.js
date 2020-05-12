// Query
import { queries as booksQueries } from "../bus/books/queries";
import { queries as strarshipsQueries} from "../bus/starships/queries";
import { queries as usersQueries } from "../bus/users/queries";

export const Query = {
    ...booksQueries,
    ...strarshipsQueries,
    ...usersQueries
};
