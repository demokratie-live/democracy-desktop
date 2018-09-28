import { Component } from 'react';
import styled from 'styled-components';

// Components
import Icon from 'Components/shared/Icon';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    width: 150px;
    max-width: 150px;
  }
`;

const Text = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    display: block;
  }
`;

const ExternalLink = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.65);
`;

class Download extends Component {
  render() {
    return (
      <Wrapper>
        <ExternalLink target="_blank" href="https://www.democracy-deutschland.de">
          <Icon type="mobile" top={0} /> <Text>App Downloaden</Text>
        </ExternalLink>
      </Wrapper>
    );
  }
}

export default Download;
