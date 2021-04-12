
import { memo, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Snackbar } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import UploadArea from 'components/UploadMedia/UploadArea'
import UploadFileItem from 'components/UploadMedia/UploadFileItem'
import { isEmpty } from 'utils/helpers/utility'
import { MAX_UPLOAD_SIZE } from 'constant';
import MESSAGES from 'constant/messages'

const useStyles = makeStyles((theme) => ({
  alert: {
    color: theme.palette.text.main,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(1),
    boxShadow: theme.custom.defaultBoxShadow
  },
  error: {
    marginLeft: theme.spacing(1)
  }
}));

const UploadMedia = ({
  type,
  fileBuffer,
  setFileBuffer,
  className
}) => {
  const [popup, setPopup] = useState();
  const classes = useStyles();

  const deleteFileHandler = useCallback(() => {
    setFileBuffer(null)
  }, [setFileBuffer]);

  const onDrop = async (acceptedFiles) => {
    if (!Array.isArray(acceptedFiles) || acceptedFiles.length <= 0) {
      setPopup({ text: MESSAGES.MAX_UPLOAD_ERROR })
      return;
    }

    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setFileBuffer(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: type.ACCEPT,
    maxSize: MAX_UPLOAD_SIZE
  });

  const handleClose = () => {
    setPopup();
  }

  return (
    <div className={className}>
      {isEmpty(fileBuffer) ? 
        <UploadArea
          placeholder={type.PLACEHOLDER}
          isDragActive={isDragActive}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
        />
        : 
        <UploadFileItem
          type={type.VALUE}
          fileBuffer={fileBuffer}
          onDelete={deleteFileHandler}
        />
      }
      {popup && 
        <Snackbar
          anchorOrigin={{ 
            vertical: 'bottom', 
            horizontal: 'right' 
          }}
          autoHideDuration={3000}
          open={popup ? true : false}
          onClose={handleClose}
        >
          <Grid container className={classes.alert}>
            <ErrorOutlineIcon />
            <Typography className={classes.error}>{popup.text}</Typography>
          </Grid>
        </Snackbar>
      }
    </div>
  );
}

export default memo(UploadMedia)