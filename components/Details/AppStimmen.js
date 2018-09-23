import styled from 'styled-components';

// components
import VoteButton from './VoteButton';
import Link from 'Components/shared/Link';
import Icon from 'Components/shared/Icon';

const Wrapper = styled.div``;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
`;

const VoteButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 555px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StoreLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 555px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const AppStimmen = () => (
  <Wrapper>
    <VoteButtons>
      <VoteButton type="thumb-up" />
      <VoteButton type="thumb-left" />
      <VoteButton type="thumb-down" />
    </VoteButtons>

    <H3>
      Um mitzustimmen, lade Dir bitte das <b>10X-Improvement</b>
      <br />
      <Link href="https://www.democracy-deutschland.de/" external primary>
        für unsere Demokratie
      </Link>
      &nbsp;herunter
    </H3>
    <StoreLink>
      <Link
        href="https://www.democracy-deutschland.de/"
        external
        style={{ color: 'rgb(74,74,74)' }}
      >
        <Icon type="appstore" fontSize={75} />
      </Link>

      <Link
        href="https://www.democracy-deutschland.de/"
        external
        style={{ color: 'rgb(74,74,74)' }}
      >
        <Icon type="playstore" fontSize={75} />
      </Link>
    </StoreLink>
  </Wrapper>
);

export default AppStimmen;
