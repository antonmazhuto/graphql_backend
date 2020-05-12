// Model
import { saveBook, updateBook, removeBook } from "./model";

import { pubSub } from "../../init/pubSub";
import { events } from "./events";

export const mutations = {
    addBook: (_, { book }) => {
        const savedBook = saveBook(book);
        pubSub.publish(events.BOOK_ADDED, {
            book: savedBook
        });

        return saveBook(book)
    },
    removeBook: (_, { id }) => removeBook(id),
    updateBook: (_, { id, book }) => {
        const updatedBook = updateBook(id, book);
        pubSub.publish(events.BOOK_UPDATED, {
            book: updatedBook
        });

        return updateBook(id, book)
    }
};
