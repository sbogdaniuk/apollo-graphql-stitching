import { ApolloServer } from 'apollo-server'

import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

const port = process.env.PORT || 3001

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(port).then(({ url }) => {
  console.log(`🚀 ready at ${url}`)
})
