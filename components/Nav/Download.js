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
    max-width: 130px;
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
  align-items: center;
  color: rgba(0, 0, 0, 0.65);
`;

class Download extends Component {
  render() {
    return (
      <Wrapper>
        <ExternalLink href="http://google.de">
          <Icon type="mobile" top={0} /> <Text>App Downloaden</Text>
        </ExternalLink>
      </Wrapper>
    );
  }
}

export default Download;
