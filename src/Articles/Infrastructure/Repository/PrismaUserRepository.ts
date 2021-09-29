import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../Domain/Repository/UserRepository';

@Injectable()
export class PrismaUserRepository implements UserRepository {}
