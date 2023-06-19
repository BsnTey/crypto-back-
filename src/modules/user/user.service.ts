import { Injectable } from '@nestjs/common';
import { users } from 'src/mocs';

@Injectable()
export class UserService {
  getUsers() {
    return users;
  }
}
