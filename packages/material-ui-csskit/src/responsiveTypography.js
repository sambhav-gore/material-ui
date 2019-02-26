import convertLength from 'convert-css-length';
import fluidRange from './fluidRange';
import { fontGrid } from './alignProperty';

const isUnitless = value => String(parseFloat(value)).length === String(value).length;
const convert = convertLength('');

export default function responsiveTypography(
  theme,
  { maxScale, breakpoints = ['sm', 'md', 'lg', 'xl'], align = true },
) {
  const output = theme;
  output.typography = { ...theme.typography };

  const breakpointValues = breakpoints.map(x => theme.breakpoints.values[x]);

  // TODO: should have the full list defined elsewhere and reused here?
  [
    'body2',
    'body1',
    'caption',
    'button',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'overline',
  ].forEach(variant => {
    const style = output.typography[variant];

    const remFontSize = convert(style.fontSize, 'rem');
    const minFontSize = parseFloat(remFontSize);
    const maxFontSize = Math.round(minFontSize * maxScale * 10) / 10;
    const { lineHeight } = style;

    if (!isUnitless(lineHeight)) {
      throw new Error(`lineHeight ${lineHeight} of variants must be unitless`);
    }

    let alignStep = null;

    // TODO: use htmlFontSize fed to theme instead of using 16px?
    //       see also convertLength(<default>)
    if (align) {
      alignStep = fontGrid({ pixels: 4, lineHeight, htmlFontSize: 16 });
    }

    output.typography[variant] = {
      ...style,
      ...fluidRange({
        cssProperty: 'fontSize',
        min: minFontSize,
        max: maxFontSize,
        unit: 'rem',
        range: breakpointValues,
        alignStep,
      }),
    };
  });

  return output;
}
