
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Grid } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

import { FILE_TYPES } from 'constant/file-types';

const useStyles = makeStyles((theme) => ({
  fileContainer: {
    position: 'relative',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2.5),
    height: '100%',
    border: `2px dotted ${theme.palette.primary.main}`,
  },
  image: {
    width: '100%',
    height: theme.spacing(27.5),
    objectFit: 'contain'
  },
  deleteIcon: {
    position: 'absolute',
    top: theme.spacing(0.75),
    right: theme.spacing(0.75),
    width: theme.spacing(3.75),
    height: theme.spacing(3.75),
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
  }
}));

const UploadFileItem = ({
  type,
  fileBuffer,
  onDelete
}) => {
  const classes = useStyles();

  return (
    <Grid 
      container
      justify='center'
      alignItems='center'
      className={classes.fileContainer}>
      {type === FILE_TYPES.IMAGE.VALUE
        ? (
          <img
            alt='uploaded-media'
            src={fileBuffer}
            className={classes.image}
          />
        ) : (
          <video autoPlay loop controls className={classes.image}>
            <source src={fileBuffer} />
          </video>
        )
      }
      <IconButton
        className={classes.deleteIcon}
        onClick={onDelete}>
        <CloseIcon />
      </IconButton>
    </Grid>
  );
}

export default memo(UploadFileItem)