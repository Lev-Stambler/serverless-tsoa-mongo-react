/**
 * @dev All time should be handled in UTC time
 */

export enum Topic {
  SAMPLE = "SAMP",
}

export enum AccountType {
  ADMIN = 0,
  TUTOR = 1,
  STUDENT = 2,
  FAMILY = 3,
}

/** @brief a block of availability. The minute is minutes from 00:00 UTC time */
interface AvailBlock {
  openMinute: number,
  closeMinute: number
} 

interface DayAvailability {
  times: AvailBlock[]
}

export interface Availabilities {
  Su: DayAvailability,
  Mo: DayAvailability,
  Tu: DayAvailability,
  We: DayAvailability,
  Th: DayAvailability,
  Fr: DayAvailability,
  Sa: DayAvailability
}