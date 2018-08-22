import { withRouter } from 'next/router';
import styled from 'styled-components';
import { Row, Col, Input, Icon } from 'antd';

import Dev from 'Components/shared/Dev';
import Link from 'Components/shared/Link';
import SelectComponent from 'Components/shared/Select';

const Option = styled(SelectComponent.Option)`
  padding-left: ${({ theme }) => theme.space(4)}px;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  height: 50px !important;
`;
const Select = styled(SelectComponent)`
  margin-left: -${({ theme }) => theme.space(4)}px;
  padding-left: ${({ theme }) => theme.space(4)}px;
  margin-bottom: ${({ theme }) => theme.space(0.5)}px;
`;

const H1 = styled.h1`
  font-family: edosz;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.backgrounds.primary};
  padding-left: ${({ theme }) => theme.space(4)}px;
  padding-right: ${({ theme }) => theme.space(4)}px;
  padding-top: ${({ theme }) => theme.space(2)}px;
  padding-bottom: ${({ theme }) => theme.space(0)}px;
`;

const FilterLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.default} !important;
`;

const Search = styled(Input)`
  height: 45px;
  border-radius: 3px;

  & .ant-input {
    background-color: ${({ theme }) => theme.backgrounds.secondary};
  }
`;

const Img = styled.img`
  width: 50px;
`;

const Header = ({ router: { pathname } }) => (
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
      <Dev>
        <Col xs={24} sm={24} lg={12}>
          <Search
            placeholder="Suche"
            onChange={value => console.log(value)}
            prefix={<Icon type="search" />}
          />
        </Col>
        <Col xs={24} sm={24} lg={6}>
          <Row>
            <Col xs={24} sm={24} lg={4}>
              <Link secondary>
                <Icon type="filter" />
                <Icon type="down" />
              </Link>
            </Col>
            <Col xs={24} sm={24} lg={10}>
              <Link secondary>
                <Icon type="mobile" /> App Downloaden
              </Link>
            </Col>
            <Col xs={24} sm={24} lg={10}>
              <Link secondary>
                <Icon type="heart" /> Unterstützen
              </Link>
            </Col>
          </Row>
        </Col>
      </Dev>
    </Row>
    <Row>
      <Dev>
        <Col xs={24} sm={24} lg={6}>
          <Select
            defaultValue="19. Bundestag (2017-2021)"
            dropdownClassName="select-dropdown-period"
          >
            <Option value="19">19. Bundestag (2017-2021)</Option>
          </Select>
        </Col>
      </Dev>
      <Dev>
        <Col xs={24} sm={24} lg={12}>
          <Row>
            <Col xs={24} sm={24} lg={6}>
              <FilterLink primary>in Abstimmung</FilterLink>
            </Col>
            <Col xs={24} sm={24} lg={6}>
              <FilterLink secondary>Vergangen</FilterLink>
            </Col>
            <Col xs={24} sm={24} lg={6}>
              <FilterLink secondary>in Vorbereitung</FilterLink>
            </Col>
            <Col xs={24} sm={24} lg={6}>
              <FilterLink secondary>What's Hot</FilterLink>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} lg={6} />
      </Dev>
    </Row>
  </Nav>
);

export default withRouter(Header);
