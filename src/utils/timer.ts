/**
 * Utility functions for landing page countdown timer and country badges.
 */

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Calculates remaining time until the next Thursday at 23:59:59 EST (cutoff).
 */
export function getTimeUntilNextCutoff(fromTime: Date = new Date()): TimeLeft {
  // Target: Next Thursday midnight EST (Friday 00:00 EST / 05:00 UTC)
  const now = fromTime.getTime();
  
  // Create date in UTC
  const target = new Date(fromTime);
  // In JS getUTCDay: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  // Thursday cutoff is Friday 05:00:00 UTC
  const currentDay = target.getUTCDay();
  let daysUntilFriday = (5 - currentDay + 7) % 7;
  
  // Set to Friday 05:00:00 UTC
  target.setUTCDate(target.getUTCDate() + daysUntilFriday);
  target.setUTCHours(5, 0, 0, 0);

  // If already passed this week's cutoff, move to next week
  if (target.getTime() <= now) {
    target.setUTCDate(target.getUTCDate() + 7);
  }

  const diff = Math.max(0, target.getTime() - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

/**
 * Pads a single digit number with a leading zero.
 */
export function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
