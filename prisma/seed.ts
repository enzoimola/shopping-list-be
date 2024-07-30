import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createItem(name: string, description: string, quantity: number, purchased: boolean): Promise<void> {
  await prisma.item.upsert({
  // @ts-ignore
    where: { name },
    update: {
      name, description, quantity, purchased,
    },
    create: {
      name, description, quantity, purchased,
    },
  });
}

// async function main(): Promise<void> {
//   try {
//     await createItem('Task 1', 'Description task', 2, false);
//   } catch (error) {
//     console.error('Error creating or updating stations:', error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }
//
// main();
