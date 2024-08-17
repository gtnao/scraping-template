import { format, eachDayOfInterval } from "date-fns";

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getFormattedDates(start: Date, end: Date): string[] {
  return eachDayOfInterval({ start, end }).map((date) =>
    format(date, "yyyy-MM-dd"),
  );
}
