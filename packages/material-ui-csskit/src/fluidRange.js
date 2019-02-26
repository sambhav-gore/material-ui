import alignProperty from './alignProperty';

/**
 *
 * fluidRange params
 * @typedef {Object} RangeParams
 * @property {string} cssProperty - The CSS property to be made responsive
 * @property {number} min - The smallest value of the CSS property
 * @property {number} max - The largest value of the CSS property
 * @property {number} unit - The unit to be used for the CSS property
 * @property {Array.number} range  - An array of breakpoints
 * @property {number} alignStep - Round scaled value to fall under this grid
 *
 * @param {RangeParams}
 * @returns responsive styles for {cssProperty}
 */

export default function fluidRange({
  cssProperty,
  min,
  max,
  unit = 'rem',
  range = [400, 960],
  alignStep = null,
}) {
  const factor = (max - min) / range[range.length - 1];

  const style = {
    [cssProperty]: `${min}${unit}`,
  };

  range.forEach(value => {
    let length = min + factor * value;

    if (alignStep !== null) {
      length = alignProperty(length, alignStep);
    }

    style[`@media (min-width:${value}px)`] = {
      [cssProperty]: `${Math.round(length * 10000) / 10000}${unit}`,
    };
  });

  return style;
}
