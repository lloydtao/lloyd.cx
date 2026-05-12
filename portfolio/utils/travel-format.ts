export const formatTravelCardDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  return new Date(date).toLocaleDateString("en", options);
};

export const formatTripDate = (date: string | undefined, withYear = true) => {
  if (!date) {
    return "-";
  }
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: withYear ? "numeric" : undefined,
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const formatTripDateRange = (start?: string, end?: string) => {
  if (!start && !end) {
    return "-";
  }
  if (start && !end) {
    return formatTripDate(start, true);
  }
  if (!start && end) {
    return formatTripDate(end, true);
  }

  const startDate = new Date(start as string);
  const endDate = new Date(end as string);

  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  const sameMonth = sameYear && startDate.getMonth() === endDate.getMonth();

  if (sameMonth) {
    const month = startDate.toLocaleDateString("en-US", { month: "short" });
    const year = startDate.getFullYear();
    return `${month} ${startDate.getDate()}–${endDate.getDate()}, ${year}`;
  }

  if (sameYear) {
    const startLabel = formatTripDate(start, false);
    const endLabel = formatTripDate(end, false);
    return `${startLabel}–${endLabel}, ${startDate.getFullYear()}`;
  }

  return `${formatTripDate(start, true)}–${formatTripDate(end, true)}`;
};

export const formatTravelPostDate = (date: string | undefined) => {
  return formatTripDate(date, true);
};

export const countryCodeToFlagEmoji = (countryCode: string) => {
  const OFFSET = 0x1f1e6 - "A".charCodeAt(0);

  return Array.from(countryCode.toUpperCase())
    .map((char) => String.fromCodePoint(OFFSET + char.charCodeAt(0)))
    .join("");
};
