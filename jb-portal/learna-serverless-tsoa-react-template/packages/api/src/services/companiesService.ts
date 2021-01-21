import { provideSingleton } from '../config/ioc';
import { UserProps } from '../models/mongo/User';

@provideSingleton(CompaniesService)
export class CompaniesService {
  public async getUsers(id: number): Promise<UserProps[]> {
    return [
      {
        createdAt: new Date(),
        email: 'test@test.com',
        id: 1,
      },
      {
        createdAt: new Date(),
        email: 'test2@test2.com',
        id: 2,
      },
    ];
  }
}
