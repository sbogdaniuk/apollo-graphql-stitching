export const resolvers = mergeInfo => ({
  Book: {
    author: {
      fragment: `fragment BookFragment on Book { authorId }`,
      resolve (parent, args, context, info) {
        return mergeInfo.delegate(
          'query',
          'author',
          {
            id: parent.authorId,
          },
          context,
          info,
        )
      },
    },
  },
})
