/**
 *
 * fluidRange params
 * @typedef {Object} RangeParams
 * @property {string} cssProperty - The CSS property to be made responsive
 * @property {number} min - The smallest value (in px) of the CSS property
 * @property {number} max - The smallest value (in px) of the CSS property
 * @property {number} lowerRange - The first screen width to increase the CSS property
 * @property {number} higherRange - The second (and largest) screen width
 *
 * @param {RangeParams}
 * @returns responsive styles for {cssProperty}
 */
export default function fluidRange({ cssProperty, min, max, lowerRange = 400, higherRange = 960 }) {
  const factor = Math.round(((max - min) / (higherRange - lowerRange)) * 10000) / 10000;

  return {
    [cssProperty]: `${min}px`,
    [`@media (min-width:${lowerRange}px)`]: {
      [cssProperty]: `calc(${min}px  (100vw - ${lowerRange}px) * ${factor})`,
    },
    [`@media (min-width:${higherRange}px)`]: {
      [cssProperty]: `${max}px`,
    },
  };
}
