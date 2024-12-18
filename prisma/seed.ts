import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.toy.createMany({
    data: [
      { name: 'Mozdony', material: 'wood', weight: 1.5 },
      { name: 'Robot', material: 'metal', weight: 4.5 },
    ],
  });

  await prisma.child.createMany({
    data: [
      { name: 'Kylian Mbappe', address: 'France, Paris', isGood: true },
      { name: 'Szoboszlai Dominik', address: 'Hungary, Budapest', isGood: false },
    ],
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
