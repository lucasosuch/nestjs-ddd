import { PrismaClient } from '@prisma/client';
const faker = require('faker');
const prisma = new PrismaClient();

async function main() {
  for (let userId = 1; userId <= 5; userId++) {
    await prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: {
        email: faker.internet.email(),
        name: faker.name.findName(),
      },
    });

    for (let postId = 1; postId <= 10; postId++) {
      await prisma.post.upsert({
        where: { id: postId },
        update: {},
        create: {
          published: true,
          title: faker.lorem.words(),
          content: faker.lorem.paragraphs(),
          authorId: userId,
        },
      });
    }
  }

  for (let commentId = 1; commentId <= 50; commentId++) {
    let authorId = (faker.datatype.number() % 4) + 1;
    let postId = (faker.datatype.number() % 9) + 1;

    await prisma.comment.upsert({
      where: { id: commentId },
      update: {},
      create: {
        content: faker.lorem.sentence(),
        authorId: authorId,
        postId: postId,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
