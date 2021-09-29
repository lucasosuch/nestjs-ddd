import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../../Domain/Repository/CommentRepository';

@Injectable()
export class PrismaCommentRepository implements CommentRepository {}
