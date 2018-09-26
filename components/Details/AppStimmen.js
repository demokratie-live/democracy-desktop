import styled from 'styled-components';

// components
import VoteButton from './VoteButton';
import Link from 'Components/shared/Link';
import IconComponent from 'Components/shared/Icon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H3 = styled.h3`
  font-size: 27px;
  text-align: center;
`;

const VoteButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 320px;
  width: 80vw;
  max-width: 400px;
  padding-bottom: ${({ theme }) => theme.space(2)}px;
`;

const StoreLink = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  align-items: center;
  flex-direction: column;
  @media (min-width: 555px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const AppStoreIcon = styled(IconComponent)`
  &:before {
    font-size: 60px;
  }

  &:hover {
    &:before {
      color: black;
    }
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
        <AppStoreIcon type="appstore" />
      </Link>

      <Link
        href="https://www.democracy-deutschland.de/"
        external
        style={{ color: 'rgb(74,74,74)' }}
      >
        <AppStoreIcon type="playstore" />
      </Link>
    </StoreLink>
  </Wrapper>
);

export default AppStimmen;
