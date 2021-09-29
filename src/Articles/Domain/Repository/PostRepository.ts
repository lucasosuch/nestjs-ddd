import { Post } from '../Entity/Post';

export interface PostRepository {
  fetchAllPostsWithAuthor(): Promise<Post[]>;
  fetchSinglePostWithAuthorAndComments(id: number): Promise<Post>;
}
