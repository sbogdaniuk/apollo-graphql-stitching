import { ApolloServer } from 'apollo-server'

import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

const PORT = process.env.PORT || 3002

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 ready at ${url}`)
})
