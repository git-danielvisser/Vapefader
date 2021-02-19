export function getPercentage(quantity, percent) {
  return (quantity / 100) * percent;
}

export function isCloserToValue(a, b, value) {
  return Math.abs(value - a) < Math.abs(value - b);
}

export function getDaysFromTo(dateA, dateB) {
  return Math.round((dateB - dateA) / 86400000); // (dateB - dateA) / 1000 / 60 / 60 / 24
}

export function smoothScrollTo(element, yOffset) {
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

