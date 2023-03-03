export class Account {
  id!: number
  username!: string
  fullName!: string
  password!: string
  birthday!: string
  country!: string
  avatar!: string

  constructor(id: number, username: string, fullName: string, password: string, birthday: string, country: string, avatar: string) {
    this.id = id;
    this.username = username;
    this.fullName = fullName;
    this.password = password;
    this.birthday = birthday;
    this.country = country;
    this.avatar = avatar;
  }
}
