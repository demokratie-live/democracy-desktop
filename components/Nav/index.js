import styled from 'styled-components';

// Components
import { Row, Col } from 'antd';

import ListLink from './ListLink';
import Search from './Search';
import Filter from './Filter';
import PeriodSelector from './PeriodSelector';
import Logo from './Logo';
import Download from './Download';
import Donate from './Donate';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.backgrounds.primary};
`;

const FirstRow = styled.div`
  display: flex;
  height: 60px;
  border-bottom-color: ${({ theme }) => theme.backgrounds.secondary};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  > div:not(:last-child) {
    border-right-color: ${({ theme }) => theme.backgrounds.secondary};
    border-right-width: 1px;
    border-right-style: solid;
  }

  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    border: 0;
    > div:not(:last-child) {
      border: 0;
    }
  }
`;

const Header = () => (
  <Nav>
    <FirstRow>
      <Logo />
      <Search />
      <Filter />
      <Download />
      <Donate />
      {/*<MenuLink href="https://www.democracy-deutschland.de/#!donate" secondary external>
        <HeartIcon /> Unterstützen
      </MenuLink> */}
    </FirstRow>
    <Row>
      <Col xs={24} sm={24} lg={6}>
        <PeriodSelector />
      </Col>
      <Col xs={24} sm={24} lg={12}>
        <Row>
          <Col xs={24} sm={24} lg={6}>
            <ListLink listType="in-abstimmung">in Abstimmung</ListLink>
          </Col>
          <Col xs={24} sm={24} lg={6}>
            <ListLink listType="vergangen">Vergangen</ListLink>
          </Col>
          <Col xs={24} sm={24} lg={6}>
            <ListLink listType="in-vorbereitung">in Vorbereitung</ListLink>
          </Col>
          <Col xs={24} sm={24} lg={6}>
            <ListLink listType="whats-hot">What's Hot</ListLink>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} lg={6} />
    </Row>
  </Nav>
);

export default Header;
