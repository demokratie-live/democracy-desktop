import styled from 'styled-components';
import Link from 'Components/shared/Link';
import ShareButton from './ShareButton';

const Wrapper = styled.div`
  display: flex;
  width: 50px;
  flex-direction: column;
`;

const ShareButtons = () => (
  <Wrapper>
    <ShareButton type="facebook" />
    <ShareButton type="twitter" />
    <ShareButton type="mail" />
  </Wrapper>
);

export default ShareButtons;
