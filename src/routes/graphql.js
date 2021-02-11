const express = require('express');
const router = express.Router();
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')

const typeDefs = require('.././graphql/schema.js')

const Query = require('.././graphql/Query')
const Mutation = require('.././graphql/Mutation')

const prisma = new PrismaClient()

const resolvers = {
  Query,
  Mutation
}
/*
const resolvers = {
  Query: {
    info: () => `This is the API of Holobur Server`,
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany()
    },
  },
  Mutation: {
    post: (parent, args, context, info) => {
      const newLink = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
        },
      })
      return newLink
    },
  },
}
*/
// 3
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  }
})

server
  .listen()
  .then(({ url }) =>
    console.log(`GraphQL Server is running on ${url}`)
  );

module.exports = router;