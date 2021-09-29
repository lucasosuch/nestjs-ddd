// import { QueryBus } from '@nestjs/cqrs';
// import { Test } from '@nestjs/testing';
// import { Prisma } from '../../Shared/Infrastructure/Database/Prisma';
// import { GetPlacesHandler } from '../Application/Queries/GetPlacesHandler';
// import { GetPlacesQuery } from '../Domain/Queries/GetPostsQuery';
// import { ArrayUtil, StringUtil } from '../../Shared/Application/Utils';
// import { Repositories } from '../Infrastructure/Repository';
// import { Location } from '../Domain/Location';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// describe('GetPlacesHandler', () => {
//   let handler: GetPlacesHandler;

//   beforeEach(async () => {
//     const module = await Test.createTestingModule({
//       providers: [
//         ...Repositories,
//         StringUtil,
//         ArrayUtil,
//         Prisma,
//         Location,
//         GetPlacesHandler,
//         {
//           provide: QueryBus,
//           useValue: {
//             execute: jest.fn(),
//           },
//         },
//       ],
//     }).compile();

//     handler = module.get(GetPlacesHandler);
//   });

//   describe('execute', () => {
//     it('should mocked array and match language', async (done) => {
//       const placesLimit = 5;
//       const numberOfCities = 3;
//       const cities = await prisma.cities.findMany();

//       const response = await handler.execute({
//         text: '',
//         language: 'pl',
//         spaceType: 'office',
//         clientLocation: { lat: 0, lng: 0, countryCode: 'pl' },
//         locationResponse: {
//           cities: cities,
//           clientCity: cities[0],
//         },
//       } as GetPlacesQuery);

//       expect(response.length).toBe(placesLimit);

//       // for (let i = 0; i < numberOfCities; i++) {
//       //   expect(response[i].type).toBe('city');
//       // }

//       await prisma.$disconnect();
//       done();
//     });
//   });
// });

// afterAll(async (done) => {
//   await prisma.$disconnect();
//   done();
// });
