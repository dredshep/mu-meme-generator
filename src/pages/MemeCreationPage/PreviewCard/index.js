import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { FILE_TYPES } from 'constant/file-types';

const useStyles = makeStyles((theme) => ({
  image: {
    height: theme.spacing(30),
    width: '100%',
    objectFit: 'cover',
    borderRadius: 1
  },
  container: props => ({
    height: theme.spacing(50),
    padding: !props.dialogMode && theme.spacing(1),
    maxWidth: theme.spacing(35),
    borderRadius: theme.spacing(1),
    border: `2px solid ${theme.palette.primary.main}`,
    '&:focus': {
      outline: '0 !important'
    }
  }),
  card: {
    height: '100%',
    padding: theme.spacing(2, 1.5),
    background: theme.palette.background.dark,
    borderRadius: theme.spacing(0.5),
    position: 'relative',
    boxShadow: '0px 6px 16px #fff4'
  },
  placeholder: {
    height: '100%'
  },
  description: {
    height: theme.spacing(12),
    background: theme.palette.background.light,
    padding: theme.spacing(1, 1.5),
    borderRadius: 1,
  },
  descriptionText: {
    fontSize: theme.spacing(1.5),
    color: theme.palette.text.dark,
    opacity: 0.9,
    textAlign: 'center',

    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    overflowWrap: 'break-word',
    WebkitLineClamp: 3,
  },
  contentWrapper: {
    height: theme.spacing(30),
    padding: `0 5px`,
    boxShadow: `0 10px 6px -6px #fff9`,
    position: 'relative'
  },
  descriptionWrapper: {
    height: theme.spacing(12),
    padding: `0 5px`,
    boxShadow: `0 10px 8px -6px #fff9`
  },
  name: {
    opacity: 0.9,
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  nameWrapper: {
    position: 'absolute',
    background: theme.palette.background.dark,
    minWidth: '60%',
    maxWidth: '90%',
    borderRadius: '0 0 100px 0',
    paddingRight: theme.spacing(3.5),
  }
}));

const PreviewCard = ({
  type,
  name,
  description,
  fileBuffer,
  dialogMode
}) => {
  const classes = useStyles({ dialogMode: dialogMode });

  return (
    <div className={classes.container}>
      {fileBuffer ? 
        <Grid 
          container
          direction='column'
          justify='space-between'
          className={classes.card}>
          <Grid className={classes.contentWrapper}>
            <div className={classes.nameWrapper}>
              <Typography variant='h6' className={classes.name}>{name}</Typography>
            </div>
            {type === FILE_TYPES.IMAGE.VALUE
              ? (
                <img
                  alt='preview-img'
                  src={fileBuffer}
                  className={classes.image}
                />
              ) : fileBuffer && (
                <video autoPlay loop controls className={classes.image}>
                  <source src={fileBuffer} />
                </video>
              )
            }
          </Grid>
          <Grid className={classes.descriptionWrapper}>
            <Grid 
              container
              justify='center'
              alignItems='center'
              className={classes.description}>
              <Typography className={classes.descriptionText}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        : 
        <Grid 
          className={classes.placeholder}
          container 
          justify='center'
          alignItems='center'>
          <Typography 
            variant='h6' 
            color='textSecondary'
            align='center'>
            Preview your meme
          </Typography>
        </Grid>
      }
    </div>
  );
}

export default memo(PreviewCard)