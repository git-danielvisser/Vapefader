// https://www.thehealthy.com/addiction/smoking/health-improvements-stop-vaping/
import getBestLiquidMixes from "./getBestLiquidMixes.js";
import {
  STRENGTH_PROGRESS_MESSAGES,
  SESSION_PROGRESS_MESSAGES,
} from "./schemaMessages.js";

/**
 * Creates the vapefader schema data.
 * @param {object} data
 * @param {string} data.device - The device used, "cigarette" or "vaporizer".
 * @param {Date} data.startDate - The start date of the schema.
 * @param {number} data.sessions - The amount of daily smoke / vape sessions.
 * @param {[number]} data.strengths - An array with the nicotine mg/ml strengths.
 * @param {number} data.decreaseInterval - Reduce every (x) days.
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
export default function generateSchema(schemaData) {
  const {
    device,
    startDate,
    sessions,
    strengths,
    decreaseInterval,
  } = schemaData;

  if (device === "cigarette") {
    const sessionItems = datesFromInterval(
      startDate,
      sessions + 1,
      decreaseInterval
    ).map((date, i) => ({
      date: date,
      sessions: sessions - i,
    }));
    addProgressMessages(sessionItems, SESSION_PROGRESS_MESSAGES);
    return sessionItems;
  }

  const strengthItems = datesFromInterval(
    startDate,
    strengths.length,
    decreaseInterval
  ).map((date, i) => ({
    date: date,
    sessions: sessions,
    strength: strengths[i],
    liquidMixes: getBestLiquidMixes(strengths[i]),
  }));

  const sessionItems = datesFromInterval(
    new Date(strengthItems[strengthItems.length - 1].date),
    sessions,
    Math.round(decreaseInterval / 2),
    true
  ).map((date, i) => ({
    date: date,
    strength: 0,
    sessions: sessions - i - 1,
  }));

  addProgressMessages(strengthItems, STRENGTH_PROGRESS_MESSAGES);
  addProgressMessages(sessionItems, SESSION_PROGRESS_MESSAGES);

  return strengthItems.concat(sessionItems);
}

/**
 * Creates x number of dates in a given interval.
 * @param {Date} startDate - The first date.
 * @param {number} totalDates - The total number of dates
 * @param {number} interval - Create date every (x) days.
 * @param {boolean} offsetStartDate - Offset the first date with interval.
 * @returns {[Date]}
 */
export function datesFromInterval(
  startDate,
  totalDates,
  interval,
  offsetStartDate = false
) {
  if (offsetStartDate) {
    startDate.setDate(startDate.getDate() + interval);
  }

  const dates = [];
  for (let i = 0; i < totalDates; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + interval * i);
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
