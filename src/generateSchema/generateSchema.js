// https://www.thehealthy.com/addiction/smoking/health-improvements-stop-vaping/
import getBestLiquidMixes from "./getBestLiquidMixes.js";
import {
  strengthProgressMessages,
  sessionProgressMessages,
} from "./schemaMessages.js";

/**
 * Creates the vapefader schema data.
 * @param {object} data
 * @param {string} data.device - The device used, "cigarette" or "vaporizer".
 * @param {Date} data.startDate - The start date of the schema.
 * @param {number} data.sessions - The amount of daily smoke / vape sessions.
 * @param {[number]} data.strengths - An array with the nicotine mg/ml strengths.
 * @param {number} data.decreaseFrequentie - Decrease every (x) days.
 * @returns {[schemaItemData]}
 *
 * return object
 * @typedef {Object} schemaItemData
 * @property {Date} date - The date of the item.
 * @property {number} sessions - Amount of sessions.
 * @property {number} strength  - The nicotine mg/ml strength used.
 * @property {liquidMixes} liquidMixes - All the possible liquid mixes that have a similar nicotine mg/ml as given strength.
 * @property {string} message - The message that should be displayed to the user.
 */
export default function generateSchema({
  device,
  startDate,
  sessions,
  strengths,
  decreaseFrequentie,
}) {
  if (device === "cigarette") {
    const sessionItems = datesFromFrequentie(
      startDate,
      sessions + 1,
      decreaseFrequentie
    ).map((date, i) => ({
      date: date,
      sessions: sessions - i,
    }));
    addProgressMessages(sessionItems, sessionProgressMessages);
    return sessionItems;
  }

  const strengthItems = datesFromFrequentie(
    startDate,
    strengths.length,
    decreaseFrequentie
  ).map((date, i) => ({
    date: date,
    sessions: sessions,
    strength: strengths[i],
    liquidMixes: getBestLiquidMixes(strengths[i]),
  }));

  const sessionItems = datesFromFrequentie(
    new Date(strengthItems[strengthItems.length - 1].date),
    sessions,
    Math.round(decreaseFrequentie / 2),
    true
  ).map((date, i) => ({
    date: date,
    strength: 0,
    sessions: sessions - i - 1,
  }));

  addProgressMessages(strengthItems, strengthProgressMessages);
  addProgressMessages(sessionItems, sessionProgressMessages);

  return strengthItems.concat(sessionItems);
}

/**
 * Creates x number of dates in a given frequentie.
 * @param {Date} startDate - The first date.
 * @param {number} totalDates - The total number of dates
 * @param {number} frequentie - Create date every (x) days.
 * @param {boolean} offsetStartDate - Offset the first date with frequentie.
 * @returns {[Date]}
 */
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

/**
 * Adds progress messages to a schema item.
 * @param {[schemaItemData]} items - #todo
 * @param {{}} messages - The messages.
 */
function addProgressMessages(items, messages) {
  if (items.length < 2) return;
  items[0].message = messages.start;
  items[items.length - 1].message = messages.end;

  if (items.length < 3) return;
  items[Math.floor(items.length / 2)].message = messages.half;

  if (items.length < 5) return;
  items[Math.floor(items.length / 4)].message = messages.qaurter;
  items[Math.floor((items.length / 4) * 3)].message = messages.threeQaurter;
}
