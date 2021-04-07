import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(4)
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(4),
    },
  }
}));

const PageWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth={'md'} className={classes.root}>
      {children}
    </Container>
  );
};

export default PageWrapper;