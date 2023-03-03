import {Account} from "./Account";
import {Image} from "./Image";
import {Comment} from "./Comment";

export class Post {
  id!: number;
  account!: { id: number, fullName: string, avatar: string };
  datetime!: string;
  content!: string;
  like : number = 0;

}
