export function isCloserToValue(a, b, value) {
  return Math.abs(value - a) < Math.abs(value - b);
}

export function getDaysFromTo(dateA, dateB) {
  return Math.round((dateB - dateA) / 86400000); // (dateB - dateA) / 1000 / 60 / 60 / 24
}

export function datesFromFrequentie(
  startDate,
  totalDates,
  frequentie,
  offsetStartDate = false
) {
  if (offsetStartDate) {
    startDate.setDate(startDate.getDate() + frequentie);
  }

  const dates = [];
  for (let i = 0; i < totalDates; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + frequentie * i);
    dates.push(date);
  }
  return dates;
}
