import { Topic } from "./common";
import { Student } from "./StudentSchema";
import { Tutor } from "./TutorSchema";

export interface SessionSchema {
  date: Date,
  tutor: Tutor,
  student: Student,
  minutes: number,
  topic: Topic,
  hourlyRate: number
}
