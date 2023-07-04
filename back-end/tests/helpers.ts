import { prisma } from '@/config';

export async function cleanDb() {
    await prisma.sessions.deleteMany({});
    await prisma.users.deleteMany({});
    await prisma.posts.deleteMany({});
  }

