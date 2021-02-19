import { isCloserToValue } from "../helpers.js";

/**
 * Finds all the possible liquid mixes that match targetStrength as closely as possible.
 * @param {number} targetStrength - The desired amount of nicotine mg/ml.
 * @returns {[]}
 */
export default function getBestLiquidMixes(targetStrength) {
  const strengths = [24, 18, 12, 6, 3, 0];

  let mixes = [];
  for (let a = 0; a < strengths.length - 1; a++) {
    for (let b = a + 1; b < strengths.length; b++) {
      if (strengths[a] === targetStrength || strengths[b] === targetStrength) {
        // Continue otherwise we will get the liquid mix ratio  100% / 0% or vice versa.
        continue;
      }

      const mix = getBestLiquidsMix(strengths[a], strengths[b], targetStrength);
      if (mix === null) continue;

      const difference = Math.abs(mix.strength - targetStrength);
      if (difference <= 0.1) {
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
 * Finds the liquid mix mix to the desired strength.
 * @param {number} strengthA - The nicotine mg/ml of liquid a.
 * @param {number} strengthB - The nicotine mg/ml of liquid b.
 * @param {number} targetStrength - The desired nicotine mg/ml of the mix.
 * @returns {{}}
 */
function getBestLiquidsMix(strengthA, strengthB, targetStrength) {
  let mix = null;

  for (let i = 0; i < 101; i++) {
    const percentA = i;
    const percentB = 100 - i;
    const partA = (strengthA / 100) * percentA;
    const partB = (strengthB / 100) * percentB;
    const strength = partA + partB;

    if (mix && !isCloserToValue(strength, mix.strength, targetStrength)) break;

    mix = {
      strength: strength,
      liquids: [
        { strength: strengthA, percent: percentA },
        { strength: strengthB, percent: percentB },
      ],
    };
  }

  return mix;
}
