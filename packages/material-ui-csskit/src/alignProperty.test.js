import { assert } from 'chai';
import alignProperty, { fontGrid } from './alignProperty';

// TODO: negative value, throw errors etc
describe('alignProperty', () => {
  const tests = [
    { args: { length: 8, grid: 4 }, expected: 8 },
    { args: { length: 8, grid: 1 }, expected: 8 },
    { args: { length: 8, grid: 9 }, expected: 9 },
    { args: { length: 8, grid: 7 }, expected: 7 },
    { args: { length: 8, grid: 17 }, expected: 0 },
  ];

  tests.forEach(test => {
    it(`Aligns ${test.args.length} on grid ${test.args.grid}`, () => {
      const lengthAligned = alignProperty({ length: test.args.length, grid: test.args.grid });
      assert.strictEqual(lengthAligned, test.expected);
    });
  });
});

describe('fontGrid', () => {
  const tests = [
    { lineHeight: 1.3, pixels: 4, htmlFontSize: 16 },
    { lineHeight: 1.6, pixels: 9, htmlFontSize: 15 },
    { lineHeight: 1.0, pixels: 3, htmlFontSize: 14 },
  ];

  tests.forEach(test => {
    const { lineHeight, pixels, htmlFontSize } = test;

    it(`With ${lineHeight} lineHeight, ${pixels} pixels,
      ${htmlFontSize} htmlFontSize, the font grid is such that
      lineHeight is aligned`, () => {
      const grid = fontGrid({ lineHeight, pixels, htmlFontSize });
      const absoluteLineHeight = grid * lineHeight * htmlFontSize;
      assert.strictEqual(Math.round((absoluteLineHeight % pixels) * 100000) / 100000, 0);
    });

    it(`With ${lineHeight} lineHeight, ${pixels} pixels,
      ${htmlFontSize} htmlFontSize, the font grid is such that
      there is no smaller font aligning the lineHeight`, () => {
      const grid = fontGrid({ lineHeight, pixels, htmlFontSize });
      const absoluteLineHeight = grid * lineHeight * htmlFontSize;
      assert.strictEqual(Math.floor(absoluteLineHeight / pixels), 1);
    });
  });
});
