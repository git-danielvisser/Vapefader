import { isCloserToValue } from "./helpers.js";

/**
 * Finds all the possible liquid mixes that match targetStrength as closely as possible.
 * @param {number} targetStrength - The desired amount of nicotine mg/ml.
 * @returns {array}
 */
export default function getBestLiquidMixes(targetStrength) {
  const strengths = [24, 18, 12, 6, 3, 0];

  let mixes = [];
  for (let a = 0; a < strengths.length - 1; a++) {
    for (let b = a + 1; b < strengths.length; b++) {
      if (strengths[a] === targetStrength || strengths[b] === targetStrength) {
        // This it wil always result in the ratio  100% / 0% or vice versa.
        continue;
      }

      const mix = getBestLiquidsMix(strengths[a], strengths[b], targetStrength);
      if (mix !== null && Math.abs(mix.strength - targetStrength) <= 0.1) {
        mixes.push(mix);
      }
    }
  }

  if (mixes.length > 0) {
    return mixes;
  } else {
    return null;
  }
}

/**
 * Finds the liquid mix closest to the desired strength.
 * @param {number} strengthA - The nicotine mg/ml of liquid a.
 * @param {number} strengthB - The nicotine mg/ml of liquid b.
 * @param {number} targetStrength - The desired nicotine mg/ml.
 * @returns {object}
 */
function getBestLiquidsMix(strengthA, strengthB, targetStrength) {
  let closest;
  for (let percentA = 0; percentA < 101; percentA++) {
    const percentB = 100 - percentA;
    const partA = (strengthA / 100) * percentA;
    const partB = (strengthB / 100) * percentB;
    const combinedStrength = partA + partB;

    if (
      !closest ||
      isCloserToValue(combinedStrength, closest.strength, targetStrength)
    ) {
      closest = {
        strength: combinedStrength,
        liquids: [
          { strength: strengthA, percentage: percentA },
          { strength: strengthB, percentage: percentB },
        ],
      };
    } else {
      return closest;
    }
  }
  return null;
}
