export default ({ length, grid }) => {
  const lengthBelow = length - (length % grid);
  const lengthAbove = lengthBelow + grid;

  return length - lengthBelow < lengthAbove - length ? lengthBelow : lengthAbove;
};

// fontGrid finds a grid for the fontSize so that the lineHeight falls under a x pixels grid
export const fontGrid = ({ lineHeight, pixels, htmlFontSize }) =>
  pixels / (lineHeight * htmlFontSize);
