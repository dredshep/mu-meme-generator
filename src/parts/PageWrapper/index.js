import React from 'react';
import styled from 'styled-components';

import { DEVICE } from 'utils/Device';

const Container = styled.div`
  max-width: 52rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
`;

const Content = styled.div`
  padding: 2rem 2rem 4rem;
  padding-top: 2rem;

  @media ${DEVICE.laptop} { 
    padding-top: 4rem;
  }
`;

const PageWrapper = ({ children}) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default PageWrapper;