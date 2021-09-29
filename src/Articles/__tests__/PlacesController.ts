// import { Test, TestingModule } from '@nestjs/testing';
// import { PlacesController } from '../Infrastructure/Interfaces/Rest/Controllers/PlacesController';
// import { CqrsModule } from '@nestjs/cqrs';
// import { Prisma } from '~/Shared/Infrastructure/Database/Prisma';
// import { ArrayUtil, StringUtil } from '~/Shared/Application/Utils';

// describe('PlacesController', () => {
//   let placesController: PlacesController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [Prisma, StringUtil, ArrayUtil],
//       imports: [CqrsModule],
//       controllers: [PlacesController],
//     }).compile();

//     placesController = module.get<PlacesController>(PlacesController);
//   });

//   it('should be defined', () => {
//     expect(placesController).toBeDefined();
//   });
// });
