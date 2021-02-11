
const { gql } = require('apollo-server');

const resolvers = gql`
    type Query: {
        info: () => `This is the API of Holobur Server`
    }
`;

module.exports = resolvers;