// Model
import { saveBook, updateBook, removeBook } from "./model";

export const mutations = {
    addBook: (_, { book }) => saveBook(book),
    removeBook: (_, { id }) => removeBook(id),
    updateBook: (_, { id, book }) => updateBook(id, book)
};
