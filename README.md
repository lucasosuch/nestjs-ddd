# NestJs Clean Architecture with DDD (Domain-Driven Design)

## Architecture overview

This project is a modular monolith with one module `Articles` and `Shared` context which represents `Kernel`. Article module is driven by CQRS. Also there has been added Prisma as ORM.

## Getting Started

```
git clone git@github.com:lucasosuch/nestjs-ddd.git
```

Then

```
yarn
```

next

```
yarn migrate:init
```

and

```
yarn migrate:seed
```

finally

```
yarn dev
```

You should see JSON responses from URLs:

- http://localhost:3000/posts
- http://localhost:3000/posts/1

Enjoy
