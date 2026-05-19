import { formatHour } from "@/lib/format";

type StoreHour = {
  day: string;
  open: string;
  close: string;
};

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function timeToMinutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function minutesToTime(minutes: number) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function getZonedNow(timezone: string, now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(now);

  const partMap = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    weekday: partMap.weekday || "Monday",
    minutes: Number(partMap.hour || 0) * 60 + Number(partMap.minute || 0)
  };
}

function getHourForDay(hours: readonly StoreHour[], day: string) {
  return hours.find((hour) => hour.day === day) || hours[0];
}

export function isStoreOpenNow(hours: readonly StoreHour[], timezone = "America/Los_Angeles", now = new Date()) {
  const current = getZonedNow(timezone, now);
  const todayHours = getHourForDay(hours, current.weekday);

  return current.minutes >= timeToMinutes(todayHours.open) && current.minutes < timeToMinutes(todayHours.close);
}

export function formatTodayHours(hours: readonly StoreHour[], timezone = "America/Los_Angeles", now = new Date()) {
  const current = getZonedNow(timezone, now);
  const todayHours = getHourForDay(hours, current.weekday);

  return `${formatHour(todayHours.open)} - ${formatHour(todayHours.close)}`;
}

export function getNextOpenMessage(hours: readonly StoreHour[], timezone = "America/Los_Angeles", now = new Date()) {
  const current = getZonedNow(timezone, now);
  const todayHours = getHourForDay(hours, current.weekday);
  const openMinutes = timeToMinutes(todayHours.open);
  const closeMinutes = timeToMinutes(todayHours.close);

  if (current.minutes >= openMinutes && current.minutes < closeMinutes) {
    return `Open now until ${formatHour(todayHours.close)}`;
  }

  if (current.minutes < openMinutes) {
    return `Closed now - opens today at ${formatHour(todayHours.open)}`;
  }

  const todayIndex = dayNames.indexOf(current.weekday);

  for (let offset = 1; offset <= 7; offset += 1) {
    const day = dayNames[(todayIndex + offset) % dayNames.length];
    const nextHours = getHourForDay(hours, day);

    if (nextHours) {
      const label = offset === 1 ? "tomorrow" : day;
      return `Closed now - opens ${label} at ${formatHour(nextHours.open)}`;
    }
  }

  return "Hours unavailable";
}

function buildPickupOptions(label: string, hours: StoreHour) {
  const firstPickupMinutes = timeToMinutes(hours.open);
  const lastPickupMinutes = timeToMinutes(hours.close) - 15;
  const options: string[] = [];

  for (let minutes = firstPickupMinutes; minutes <= lastPickupMinutes; minutes += 15) {
    options.push(`${label} at ${formatHour(minutesToTime(minutes))}`);
  }

  return options;
}

export function getNextOpenPickupOptions(hours: readonly StoreHour[], timezone = "America/Los_Angeles", now = new Date()) {
  const current = getZonedNow(timezone, now);
  const todayHours = getHourForDay(hours, current.weekday);
  const openMinutes = timeToMinutes(todayHours.open);
  const closeMinutes = timeToMinutes(todayHours.close);

  if (current.minutes >= openMinutes && current.minutes < closeMinutes) {
    return [];
  }

  if (current.minutes < openMinutes) {
    return buildPickupOptions("Today", todayHours);
  }

  const todayIndex = dayNames.indexOf(current.weekday);

  for (let offset = 1; offset <= 7; offset += 1) {
    const day = dayNames[(todayIndex + offset) % dayNames.length];
    const nextHours = getHourForDay(hours, day);

    if (nextHours) {
      const label = offset === 1 ? "Tomorrow" : day;
      return buildPickupOptions(label, nextHours);
    }
  }

  return [];
}
