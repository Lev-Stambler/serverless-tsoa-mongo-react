import { Family } from "./FamilySchema";
import { User } from "./UserSchema";

export interface Student {
  user: User
  name: string,
  family: Family,
}