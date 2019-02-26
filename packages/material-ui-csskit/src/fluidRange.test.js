import { assert } from 'chai';
import fluidRange from './fluidRange';

describe('fluidRange', () => {
  it('Typical responsive font, in pixels', () => {
    const correctFontStyle = {
      fontSize: '15px',
      '@media (min-width:300px)': {
        fontSize: '17.5px',
      },
      '@media (min-width:600px)': {
        fontSize: '20px',
      },
    };
    const testFontStyle = fluidRange({
      cssProperty: 'fontSize',
      min: 15,
      max: 20,
      unit: 'px',
      range: [300, 600],
      gridStep: null,
    });

    assert.deepEqual(correctFontStyle, testFontStyle);
  });
  it('Range of breakpoints is only one element, in REM', () => {
    const correctFontStyle = {
      fontSize: '0.875rem',
      '@media (min-width:500px)': {
        fontSize: '1rem',
      },
    };
    const testFontStyle = fluidRange({
      cssProperty: 'fontSize',
      min: 0.875,
      max: 1,
      unit: 'rem',
      range: [500],
      gridStep: null,
    });

    assert.deepEqual(correctFontStyle, testFontStyle);
  });
});
