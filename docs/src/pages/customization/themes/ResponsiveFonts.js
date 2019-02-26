import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { responsiveTypography } from '@material-ui/csskit';
import Typography from '@material-ui/core/Typography';

const mobileTheme = createMuiTheme({});

const theme = responsiveTypography(mobileTheme, {
  maxScale: 2.0,
  breakpoints: ['sm', 'lg'],
});

function ResponsiveTheme() {
  return (
    <MuiThemeProvider theme={theme}>
      <Typography variant="h6">I am a responsive text.</Typography>
    </MuiThemeProvider>
  );
}

export default ResponsiveTheme;
