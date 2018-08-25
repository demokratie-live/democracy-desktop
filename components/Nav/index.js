import styled from 'styled-components';
import { Row, Col, Icon } from 'antd';

import Dev from 'Components/shared/Dev';
import Link from 'Components/shared/Link';
import SelectComponent from 'Components/shared/Select';
import ListLink from './ListLink';
import Search from './Search';
import Filter from './Filter';

const Option = styled(SelectComponent.Option)`
  padding-left: ${({ theme }) => theme.space(4)}px;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  height: 50px !important;
`;
const Select = styled(SelectComponent)`
  margin-left: -${({ theme }) => theme.space(4)}px;
  padding-left: ${({ theme }) => theme.space(4)}px;
  margin-bottom: ${({ theme }) => theme.space(0.5)}px;

  .ant-select-selection__rendered {
    margin-left: 0;
  }
`;

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
        <Dev>
          <Search />
        </Dev>
      </Col>
      <Col xs={24} sm={24} lg={6}>
        <Row>
          <Col xs={24} sm={24} lg={4}>
            <Dev>
              <Filter />
            </Dev>
          </Col>
          <Col xs={24} sm={24} lg={10}>
            <MenuLink href="https://www.democracy-deutschland.de" secondary external>
              <Icon type="mobile" /> App Downloaden
            </MenuLink>
          </Col>
          <Col xs={24} sm={24} lg={10}>
            <MenuLink href="https://www.democracy-deutschland.de/#!donate" secondary external>
              <Icon type="heart" /> Unterstützen
            </MenuLink>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xs={24} sm={24} lg={6}>
        <Dev>
          <Select
            defaultValue="19. Bundestag (2017-2021)"
            dropdownClassName="select-dropdown-period"
          >
            <Option value="19">19. Bundestag (2017-2021)</Option>
          </Select>
        </Dev>
      </Col>
      <Col xs={24} sm={24} lg={12}>
        <Dev>
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
        </Dev>
      </Col>
      <Col xs={24} sm={24} lg={6} />
    </Row>
  </Nav>
);

export default Header;
