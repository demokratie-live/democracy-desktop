import styled from 'styled-components';
import { Row, Col } from 'antd';

import Link from 'Components/shared/Link';
import Icon from 'Components/shared/Icon';
import ListLink from './ListLink';
import Search from './Search';
import Filter from './Filter';
import PeriodSelector from './PeriodSelector';

const H1 = styled.h1`
  font-family: edosz;
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.space(2)}px;
  margin-top: -${({ theme }) => theme.space(2)}px;
`;

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

const Img = styled.img`
  width: 50px;
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
        <Link href="/" secondary>
          <H1>
            <Img alt="DEMOCRACY Deutschland" src="/static/images/Bubble.png" />
            &nbsp;DEMOCRACY
          </H1>
        </Link>
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
