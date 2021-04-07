import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import PageWrapper from 'parts/PageWrapper';
import UploadMedia from 'components/UploadMedia';
import { FILE_TYPES } from 'constant/file-types';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2)
  }
}));

const MemeCreationPage = () => {
  const classes = useStyles();
  const [fileBuffer, setFileBuffer] = useState(null);

  return (
    <PageWrapper>
      <Typography variant='h4' className={classes.title}>Create Meme NFT Token</Typography>
      <UploadMedia 
        type={FILE_TYPES[FILE_TYPES.IMAGE.VALUE]}
        fileBuffer={fileBuffer}
        setFileBuffer={setFileBuffer} />
    </PageWrapper>
  );
};

export default MemeCreationPage;