import React from 'react';
import styled from 'styled-components';

import LogoImage from 'assets/images/logo.png';
import Flex from 'components/UI/Flex';

const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.background.main};
  min-height: 100vh;
`;

const Header = styled(Flex)`
  background-color: ${props => props.theme.palette.background.secondary};
  height: 4rem;
  width: 100%;
`;

const Logo = styled.img`
  width: 3rem;
  margin-right: 1rem;
`;

const HeaderLabel = styled.h2`
  color: ${props => props.theme.palette.text.main};
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header align='center'>
        <Flex align='center' pd='0.5rem 1.5rem'>
          <Logo alt='meme-generator-logo' src={LogoImage} />
          <HeaderLabel>Meme Generator</HeaderLabel>
        </Flex>
      </Header>
      {children}
    </Wrapper>
  );
};

export default Layout;