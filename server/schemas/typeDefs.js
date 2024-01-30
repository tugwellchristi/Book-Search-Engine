const { gql } = require('apollo-server');

const typeDefs = gqp`
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: BookInput!): User
        removeBook(bookId: ID!): User
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        authors: [String!]
        description: String
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: String!
        user: User
    }
`;

module.exports = typeDefs;