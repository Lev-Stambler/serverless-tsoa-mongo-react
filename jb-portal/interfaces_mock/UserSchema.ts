import { AccountType } from "./common";

export interface User {
  // Subject to change
  timeZone: string,
  // Subject to change
  authKey: string,
  accountType: AccountType,
  email: string
}