import { PrismaClient } from '@prisma/client'
import prisma from '@/lib/prisma'
import { Claims, getSession } from '@auth0/nextjs-auth0'

export type Context = {
  // user?: Claims
  // accessToken?: string
  prisma: PrismaClient
}
export async function createContext( req:any, res:any): Promise<Context> {
  return { prisma }
  // const session =await getSession(req, res)

  // if (!session) return { prisma }

  // const { user, accessToken } = session

  // return {
  //   user,
  //   accessToken,
  //   prisma,
  // }
}