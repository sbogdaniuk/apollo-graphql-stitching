import { authors } from './data'

export const resolvers = {
  Query: {
    authors: () => authors,
    author: (_, args) => authors.find(d => d.id === args.id),
  },
}
