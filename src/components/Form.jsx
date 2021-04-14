import React from 'react';
import { Button, Typography, Box, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme';

const useStyles = makeStyles({
  mainHeadingStyle: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
});

function Form() {
  const { mainHeadingStyle } = useStyles();
  return (
    <Box component="form">
      <ThemeProvider theme={theme}>
        <header className='App-header'>
          <Typography className={mainHeadingStyle} variant='h1'>
            Material UI form
          </Typography>
        </header>
        <Button variant='contained' color='primary'>
          Submit
        </Button>
      </ThemeProvider>
    </Box>
  );
}

export default Form;
