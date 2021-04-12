
import { memo } from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUploadOutlined';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  upload: {
    padding: theme.spacing(4),
    height: '100%',
    borderRadius: theme.spacing(2.5),
    border: `2px dashed ${theme.palette.primary.main}`,
    '&:focus': {
      outline: '0 !important'
    }
  },
  iconContainer: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginBottom: theme.spacing(0.5)
  },
  uploadIcon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    transition: 'width 0.5s, height 0.5s',
    color: theme.palette.primary.main
  },
  dragActiveIcon: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  button: {
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      background: 'transparent',
    }
  }
}));

const UploadArea = ({
  placeholder,
  isDragActive,
  getRootProps,
  getInputProps
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justify='center'
      {...getRootProps()}
      className={classes.upload}>
      <input {...getInputProps()} />
      <Typography
        variant='h6'
        color='textSecondary'
        align='center'>
        {placeholder}
      </Typography>
      <Grid 
        container 
        justify='center' 
        alignItems='center' 
        className={classes.iconContainer}>
        <CloudUploadIcon className={clsx(classes.uploadIcon, { [classes.dragActiveIcon]: isDragActive })} />
      </Grid>
      <Button className={classes.button} size='small' variant="contained" color="primary">
        Choose file
      </Button>
    </Grid>
  );
}

export default memo(UploadArea)