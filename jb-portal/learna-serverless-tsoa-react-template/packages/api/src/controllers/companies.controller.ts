import { CompaniesService } from '../services/companiesService';
import { inject, provideSingleton } from '../config/ioc';
import { Route, Get, Controller } from 'tsoa';
import { User } from '../models/User';
import { UserProps } from '../models/mongo/User';

@Route('Companies')
@provideSingleton(CompaniesController)
export class CompaniesController extends Controller {
  constructor(
    @inject(CompaniesService) private companiesService: CompaniesService
  ) {
    super();
  }

  /** Get a list of users for the account */
  @Get('Users')
  public async getUsers(): Promise<UserProps[]> {
    return await this.companiesService.getUsers(600);
  }
}
