import { withRouter } from 'next/router';
import { Row, Col, Card } from 'antd';

import Link from 'Components/shared/Link';
import Dev from 'Components/shared/Dev';

const Header = ({ router: { pathname } }) => (
  <header>
    <Link as={`/gesetz/234877/Some-Title`} href={`/details?title=testTitle`}>
      TestLink
    </Link>
    <Dev>
      <Row>
        <Col xs={24} sm={12} lg={6}>
          <Card title="ABC">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card title="EFG">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card title="HIJ">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card title="KLM">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={3}>
          KLM
          {/*<PeriodSelect>19. Legislaturperiode ('17-'21)</PeriodSelect>*/}
        </Col>
        <Col span={6}>
          NOP
          {/*<ListSelect />*/}
        </Col>
        <Col span={3} />
      </Row>
    </Dev>
  </header>
);

export default withRouter(Header);
