import { Availabilities, Topic } from "./common";
import { User } from "./UserSchema";

type HourlyRates = {
  [topic in Topic]: number;
}

export interface Tutor {
  user: User,
  name: string;
  availabilities: Availabilities;
  hourlyRates: HourlyRates;
}
