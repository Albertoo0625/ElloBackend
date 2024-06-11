export const typeDefs = `#graphql
  type Book {
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
  }

  type Query {
    books: [Book]
    searchSuggest(term: String!): [String]
    searchResult(term: String!): [Book]
  }
`;


