
const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        info: String!
        feed(filter: String, skip: Int, take: Int, orderBy: LinkOrderByInput): [Link!]!
    }

    type AuthPayload {
        token: String
        user: User
    }
      
    type User {
        id: ID!
        name: String!
        email: String!
        links: [Link!]!
    }

    type Mutation {
        post(url: String!, description: String!): Link!
        signup(email: String!, password: String!, name: String!): AuthPayload
        login(email: String!, password: String!): AuthPayload
    }

    type Link {
        id: ID!
        description: String!
        url: String!
        postedBy: User
    }

    input LinkOrderByInput {
        description: Sort
        url: Sort
        createdAt: Sort
    }
      
    enum Sort {
        asc
        desc
    }
`;

module.exports = typeDefs;