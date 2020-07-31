const { ApolloServer, gql } = require('apollo-server-express')
const fs = require('fs')
const path = require('path') //monta o endereço de arquivo
const resolvers = require('./resolvers')


const schema = fs.readFileSync(path.join(__dirname, 'schema.graphql'))
const typeDefs = gql`${schema}`


const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers
})

module.exports = graphqlServer