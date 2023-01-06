export const resolvers = {
  Query: {
    links: (_parent: any, _args: any, ctx: { prisma: { link: { findMany: () => any } } }) => {
      return ctx.prisma.link.findMany()
    },
  },
}