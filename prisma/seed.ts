import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createItem(name: string, description: string, quantity: number): Promise<void> {
  await prisma.item.upsert({
  // @ts-ignore
    where: { name },
    update: { name, description, quantity },
    create: { name, description, quantity },
  });
}

async function main(): Promise<void> {
  try {
    await createItem('VOLCAN', 'description text', 2);
  } catch (error) {
    console.error('Error creating or updating stations:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
