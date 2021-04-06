import React from 'react';
import styled from 'styled-components';

import PageWrapper from 'parts/PageWrapper';
import UploadMedia from 'components/UploadMedia';
import { DEVICE } from 'utils/Device';

const PageTitle = styled.div`
  color: ${props => props.theme.palette.text.main};
  font-size: 1.5rem;
  font-weight: bold;

  @media ${DEVICE.laptop} { 
    font-size: 2rem;
  }
`;

const MemeCreationPage = () => {
  return (
    <PageWrapper>
      <PageTitle>Create Meme NFT Token</PageTitle>
      <UploadMedia />
    </PageWrapper>
  );
};

export default MemeCreationPage;