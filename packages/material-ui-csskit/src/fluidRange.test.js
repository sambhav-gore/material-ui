import { assert } from 'chai';
import fluidRange from './fluidRange';

/// COMMENT: Test pattern should follow following structure:
/*
    decribe("[function name]", () => {
      describe("When [Condition]", () => {
        it("should do/return/perform/action something", () => {
           ASSERTS.
        })
      })
    })
*/

describe('fluidRange', () => {
  /// COMMENT: by convention, tests should begin with "Should"
  /// example : it("should respond with reponsive font in pixel")
  it('Typical responsive font, in pixels', () => {

    /// COMMENT: By convention - rename this to mockedFontStyle Or Mocks.responsiveFontStyle (avoid name 'correct')
    const correctFontStyle = {
      fontSize: '15px',
      '@media (min-width:300px)': {
        fontSize: '17.5px',
      },
      '@media (min-width:600px)': {
        fontSize: '20px',
      },
    };

    /// COMMENT: By convention call this 'result' (const result = fluidRange ...)
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
