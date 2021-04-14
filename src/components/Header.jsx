import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';

const useStyles = makeStyles({
  headerStyles: {
    backgroundColor: 'purple',
    marginBottom: "1rem"
  },
  toolbarStyles: {
    minHeight: '2.5rem',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  typographyStyles: {
    flex: 1,
  },
  iconStyles: {
    backgroundColor: 'darkgray',
    borderRadius: '50%',
    padding: '1px',
  },
});

const Header = () => {
  const {
    headerStyles,
    toolbarStyles,
    typographyStyles,
    iconStyles,
  } = useStyles();

  return (
    <AppBar className={headerStyles} position='static'>
      <Toolbar className={toolbarStyles}>
        <Typography className={typographyStyles}>Brad Rivenburgh</Typography>
        <AcUnitRoundedIcon className={iconStyles} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
