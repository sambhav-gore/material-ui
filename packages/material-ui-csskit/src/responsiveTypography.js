// import { allVariants } from '@material-ui/core/Typography';
import fluidRange from './fluidRange';

function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export default function responsiveTypography(theme, { minFontSize, scale, ...other }) {
  const output = theme;
  output.typography = { ...theme.typography };

  // TODO: use allVariants
  [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    // 'subtitle1',
    // 'subtitle2',
    // 'body1',
    // 'body2',
    // 'buttonNext',
    // 'captionNext',
    // 'overline',
  ].forEach(variant => {
    const style = output.typography[variant];
    const pixelFontSize = remToPx(style.fontSize);

    if (pixelFontSize <= minFontSize) {
      return;
    }

    output.typography[variant] = {
      ...style,
      ...fluidRange({
        cssProperty: 'fontSize',
        min: Math.max(minFontSize, Math.round(pixelFontSize * scale)),
        max: pixelFontSize,
        ...other,
      }),
    };
  });

  return output;
}
