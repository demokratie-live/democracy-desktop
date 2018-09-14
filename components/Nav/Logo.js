import styled from 'styled-components';

// Components
import Link from 'Components/shared/Link';

const H1 = styled.h1`
  font-family: edosz;
  font-size: ${({ theme }) => theme.fontSizes.large};
  vertical-align: center;
  @media (min-width: 992px) {
    font-size: 3.5vw;
  }
  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

const Img = styled.img`
  width: 50px;
  @media (min-width: 992px) {
    width: 3.5vw;
  }
  @media (min-width: 1400px) {
    width: 50px;
  }
`;

const Logo = () => (
  <Link href="/" secondary>
    <H1>
      <Img alt="DEMOCRACY Deutschland" src="/static/images/Bubble.png" />
      &nbsp;DEMOCRACY
    </H1>
  </Link>
);

export default Logo;
