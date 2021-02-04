import getBestLiquidMixes from "./getBestLiquidMixes";
import { datesFromFrequentie } from "./helpers.js";

// https://www.thehealthy.com/addiction/smoking/health-improvements-stop-vaping/

const strengthProgressMessages = {
  start:
    "We will start by decreasing nicotine strength, good luck and strong wilpower.😄",
  qaurter: "Good progress, keep going! 💪",
  half: "Your half way there, keep going! 🐉",
  threeQaurter: "Almost there, just a bit more.⌛️🏁",
  end: "You made it! 📈❤️🍆",
};

const sessionProgressMessages = {
  start: "We will start decreasing sessions, good luck and you got this.😄",
  qaurter: "Your on your way, good progress! 🙏",
  half: "Half way there! You proved that you can do it! 🐲",
  threeQaurter: "Almost there, just a bit more.⌛️🏁",
  end: "You made it! 📈❤️💎🍆🤑",
};

export default function generateSchema(formData) {
  const { startDate, sessions, strengths, decreaseFrequentie } = formData;

  if (formData.device === "cigarette") {
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
  addProgressMessages(strengthItems, strengthProgressMessages);

  const sessionItems = datesFromFrequentie(
    new Date(strengthItems[strengthItems.length - 1].date),
    sessions,
    Math.round(decreaseFrequentie / 2),
    true
  ).map((date, i) => ({
    date: date,
    sessions: sessions - i - 1,
    strength: 0,
  }));
  addProgressMessages(sessionItems, sessionProgressMessages);

  return strengthItems.concat(sessionItems);
}

function addProgressMessages(items, messages) {
  // Progresss messages
  if (items.length > 0) {
    items[0].message = messages.start;
  } else {
    return;
  }
  if (items.length > 1) {
    items[items.length - 1].message = messages.end;
  } else {
    return;
  }
  if (items.length > 2) {
    items[Math.floor(items.length / 2)].message = messages.half;
  } else {
    return;
  }
  if (items.length > 4) {
    items[Math.floor(items.length / 4)].message = messages.qaurter;
    items[Math.floor((items.length / 4) * 3)].message = messages.threeQaurter;
  }
}
