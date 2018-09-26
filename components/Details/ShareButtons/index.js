import styled from 'styled-components';
import Link from 'Components/shared/Link';
import ShareButtonComponent from './ShareButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    width: 50px;
    flex-direction: column;
  }
`;

const ShareButton = styled(ShareButtonComponent)`
  margin-right: ${({ theme }) => theme.space(1)}px;
`;

const ShareButtons = () => (
  <Wrapper>
    <ShareButton type="facebook" />
    <ShareButton type="twitter" />
    <ShareButton type="mail" />
  </Wrapper>
);

export default ShareButtons;
