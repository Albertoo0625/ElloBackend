import { booksData } from '../data/books';

export const resolvers = {
  Query: {
    books: () => booksData,
    searchSuggest: (_:any, args:any) => {
      const {term}=args;
      const suggestions = booksData
      .filter(book => book.title.toLowerCase().includes(term.toLowerCase()))
      .map(book => book.title);
      return suggestions;
    },
    searchResult: (_:any, args:any) => {
      const {term}=args;
      return booksData.filter(book =>
        book.title.toLowerCase().includes(term.toLowerCase())
      );
    },
  },
};
;

