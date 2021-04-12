import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  button: {
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      background: 'transparent',
    }
  }
}));

const MuButton = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <Button 
      className={clsx(classes.button, className)}
      {...rest}>
      {children}
    </Button>
  );
};

export default MuButton;