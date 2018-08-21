import { withRouter } from 'next/router';
import styled from 'styled-components';
import { Row, Col, Input, Icon, Select as SelectComponent } from 'antd';

import Dev from 'Components/shared/Dev';
import Link from 'Components/shared/Link';

const Option = SelectComponent.Option;

const H1 = styled.h1`
  font-family: edosz;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.backgrounds.primary};
  padding-left: ${({ theme }) => theme.space * 4}px;
  padding-right: ${({ theme }) => theme.space * 4}px;
  padding-top: ${({ theme }) => theme.space * 2}px;
  padding-bottom: ${({ theme }) => theme.space * 2}px;
`;

const Img = styled.img`
  width: 50px;
`;

const Select = styled(SelectComponent)`
  width: 100%;
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
          <Input
            placeholder="Suche"
            onSearch={value => console.log(value)}
            prefix={<Icon type="search" />}
          />
        </Col>
        <Col xs={24} sm={24} lg={6}>
          <Icon type="filter" />
          <Icon type="down" />
          ##LinkInline Filter
          <Icon type="mobile" />
          ##Link App Downloaden
          <Icon type="heart" />
          ##Link Unterstützen
        </Col>
      </Dev>
    </Row>
    <Row>
      <Col xs={24} sm={24} lg={6}>
        <Select defaultValue="19. Bundestag (2017-2021)">
          <Option value="19">19. Bundestag (2017-2021)</Option>
        </Select>
      </Col>
      <Dev>
        <Col xs={24} sm={24} lg={12}>
          ##Filter in Abstimmung ##Filter Vergangen ##Filter in Vorbereitung ##Filter What's Hot
        </Col>
        <Col xs={24} sm={24} lg={6} />
      </Dev>
    </Row>
  </Nav>
);

export default withRouter(Header);
