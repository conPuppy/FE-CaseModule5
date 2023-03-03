import {Account} from "./Account";
import {Post} from "./Post";

export class Comment {
  id!: number;
  comment!: string;
  account!: Account;
  post!: Post
}
