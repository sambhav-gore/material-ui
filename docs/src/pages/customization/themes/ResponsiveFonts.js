import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { responsiveTypography } from '@material-ui/csskit';
import Typography from '@material-ui/core/Typography';

const defaultTheme = createMuiTheme({});

const theme = responsiveTypography(defaultTheme, {
  minFontSize: 14,
  scale: 0.7,
});

function ResponsiveTheme() {
  return (
    <MuiThemeProvider theme={theme}>
      <Typography variant="h6">I am a responsive text.</Typography>
    </MuiThemeProvider>
  );
}

export default ResponsiveTheme;
