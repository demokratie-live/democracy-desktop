import styled from 'styled-components';

// Components
import { Row, Col } from 'antd';

import Icon from 'Components/shared/Icon';
import ListLink from './ListLink';
import Search from './Search';
import Filter from './Filter';
import PeriodSelector from './PeriodSelector';
import Logo from './Logo';
import Link from 'Components/shared/Link';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.backgrounds.primary};
  padding-left: ${({ theme }) => theme.space(4)}px;
  padding-right: ${({ theme }) => theme.space(4)}px;
  padding-top: ${({ theme }) => theme.space(2)}px;
  padding-bottom: ${({ theme }) => theme.space(0)}px;
`;

const MenuLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.default};

  .anticon {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const HeartIcon = styled(Icon).attrs({
  type: 'heart-filled',
})`
  color: #d0021b;
`;

const Header = () => (
  <Nav>
    <Row>
      <Col xs={24} sm={24} lg={6}>
        <Logo />
      </Col>
      <Col xs={24} sm={24} lg={12}>
        <Search />
      </Col>
      <Col xs={24} sm={24} lg={6}>
        <Row>
          <Col xs={24} sm={24} lg={4}>
            <Filter />
          </Col>
          <Col xs={24} sm={24} lg={10}>
            <MenuLink href="https://www.democracy-deutschland.de" secondary external>
              <Icon type="mobile" /> App Downloaden
            </MenuLink>
          </Col>
          <Col xs={24} sm={24} lg={10}>
            <MenuLink href="https://www.democracy-deutschland.de/#!donate" secondary external>
              <HeartIcon /> Unterstützen
            </MenuLink>
          </Col>
        </Row>
      </Col>
    </Row>
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
