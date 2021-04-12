import React, { useState } from 'react';
import { Typography, Grid, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import * as Yup from 'yup'; 

import PageWrapper from 'parts/PageWrapper';
import MemeCreationForm from 'pages/MemeCreationPage/MemeCreationForm';
import PreviewCard from 'pages/MemeCreationPage/PreviewCard';
import UploadMedia from 'components/UploadMedia';
import MuButton from 'components/UI/Button/MuButton';
import { FILE_TYPES } from 'constant/file-types';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4)
  },
  subtitle: {
    marginBottom: theme.spacing(1)
  },
  uploadContainer: {
    marginBottom: theme.spacing(8)
  },
  preview: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  button: {
    height: theme.spacing(4),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  dialog: {
    background: 'transparent',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

const MemeCreationPage = () => {
  const classes = useStyles();
  const [fileBuffer, setFileBuffer] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const initialValues = {
    Name: '',
    Description: '',
    Price: '',
    PriceType: 'ETH'
  };

  const handleSave = (values, setSubmitting) => {

  };

  const handleOpenPreviewCard = () => {
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  return (
    <PageWrapper>
      <Typography variant='h4' className={classes.title}>Create Meme NFT Token</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSave(values, setSubmitting);
        }}
        validationSchema={Yup.object().shape({
          Name: Yup.string().required('Name is required'),
          Description: Yup.string().required('Description is required'),
        })}>
        {(props) => {
          const { handleSubmit, values } = props;
          return (
            <form onSubmit={handleSubmit}>        
              <Grid container spacing={4}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                  <Grid container justify='space-between'>
                    <Typography variant='h6' className={classes.subtitle}>Upload file</Typography>
                    {fileBuffer && 
                      <MuButton 
                        size='small'
                        className={classes.button}
                        onClick={handleOpenPreviewCard}
                        variant="contained" 
                        color="primary">
                        Preview
                      </MuButton>
                    }
                  </Grid>
                  <UploadMedia 
                    className={classes.uploadContainer}
                    type={FILE_TYPES[FILE_TYPES.IMAGE.VALUE]}
                    fileBuffer={fileBuffer}
                    setFileBuffer={setFileBuffer} />
                  <MemeCreationForm {...props} />
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12} className={classes.preview}>
                  <Typography variant='h6' className={classes.subtitle}>Preview</Typography>
                  <PreviewCard
                    type={FILE_TYPES.IMAGE.VALUE}
                    fileBuffer={fileBuffer}
                    name={values.Name}
                    description={values.Description}
                  />
                </Grid>
              </Grid>
              {showPreview && 
                <Dialog
                  classes={{
                    paper: classes.dialog
                  }}
                  aria-labelledby="simple-dialog-title"
                  open={true}
                  onClose={handleClosePreview}>
                  <PreviewCard
                    dialogMode
                    type={FILE_TYPES.IMAGE.VALUE}
                    fileBuffer={fileBuffer}
                    name={values.Name}
                    description={values.Description}
                  />
                </Dialog>
              }
            </form>
        )}}
      </Formik>
    </PageWrapper>
  );
};

export default MemeCreationPage;