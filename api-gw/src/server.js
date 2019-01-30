import { ApolloServer } from 'apollo-server'
import { mergeSchemas } from 'graphql-tools'

import { getIntrospectSchema } from './introspection'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

const port = process.env.PORT || 3000

//our graphql endpoints
const endpoints = [
  'http://localhost:3001',
  'http://localhost:3002',
];

(async function() {
  try {
    //promise.all to grab all remote schemas at the same time, we do not care what order they come back but rather just when they finish
    const allSchemas = await Promise.all(endpoints.map(ep => getIntrospectSchema(ep)))

    const server = new ApolloServer({
      schema: mergeSchemas({
        schemas: allSchemas.concat(typeDefs),
        resolvers,
      }),
    })

    server.listen(port).then(({ url }) => {
      console.log(`🚀 ready at ${url}`)
    })
  } catch (error) {
    console.log('ERROR: Failed to grab introspection queries', error)
  }
})()
