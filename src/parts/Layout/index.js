import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LogoImage from 'assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.secondary,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  toolbar: {
    padding: `0 ${theme.spacing(1.5)}px 0 ${theme.spacing(2.25)}px`,
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    flexGrow: 1,
    lineHeight: 1.25,
    marginLeft: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  logo: {
    width: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(5)
    }
  },
  content: {
    marginTop: theme.spacing(8),
    minHeight: `calc(100vh - ${theme.spacing(8)}px)`,
    background: theme.palette.background.main,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(7),
      minHeight: `calc(100vh - ${theme.spacing(7)}px)`,
    }
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        color="primary"
        position="fixed"
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container alignItems='center'>
            <img alt="meme-generator-logo" src={LogoImage} className={classes.logo} />
            <Typography variant="h6" className={classes.title} id='user-name'>
              Meme Generator
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;