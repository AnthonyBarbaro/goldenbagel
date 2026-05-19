type StoreHour = {
  day: string;
  open: string;
  close: string;
};

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const timezone = "America/Los_Angeles";
const pickupHours: readonly StoreHour[] = [
  { day: "Monday", open: "06:30", close: "15:00" },
  { day: "Tuesday", open: "06:30", close: "15:00" },
  { day: "Wednesday", open: "06:30", close: "15:00" },
  { day: "Thursday", open: "06:30", close: "15:00" },
  { day: "Friday", open: "06:30", close: "15:00" },
  { day: "Saturday", open: "06:30", close: "15:00" },
  { day: "Sunday", open: "06:30", close: "15:00" }
] as const;

function timeToMinutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function formatHour(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  const displayHour = hour % 12 || 12;
  const suffix = hour >= 12 ? "PM" : "AM";

  return minute > 0 ? `${displayHour}:${String(minute).padStart(2, "0")} ${suffix}` : `${displayHour} ${suffix}`;
}

function getZonedNow(now = new Date()) {
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

function getHourForDay(day: string) {
  return pickupHours.find((hour) => hour.day === day) || pickupHours[0];
}

export function isPickupOpenNow(now = new Date()) {
  const current = getZonedNow(now);
  const todayHours = getHourForDay(current.weekday);

  return current.minutes >= timeToMinutes(todayHours.open) && current.minutes < timeToMinutes(todayHours.close);
}

export function getNextPickupOpenMessage(now = new Date()) {
  const current = getZonedNow(now);
  const todayHours = getHourForDay(current.weekday);
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
    const nextHours = getHourForDay(day);

    if (nextHours) {
      const label = offset === 1 ? "tomorrow" : day;
      return `Closed now - opens ${label} at ${formatHour(nextHours.open)}`;
    }
  }

  return "Hours unavailable";
}

export function isImmediatePickupTime(pickupTime: string) {
  const normalized = pickupTime.trim().toLowerCase();
  return normalized === "asap" || /^\d+\s*minutes?$/.test(normalized);
}
