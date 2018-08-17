import { withRouter } from 'next/router';
import { Row, Col, Spin } from 'antd';

import Link from 'Components/shared/Link';
import Dev from 'Components/shared/Dev';

const Header = ({ router: { pathname } }) => (
  <header>
    <Link as={`/gesetz/234877/Some-Title`} href={`/details?title=testTitle`}>
      TestLink
    </Link>
    <Dev>
      <Row>
        <Col span={6}>
          ABC
          {/*<Bubble>DEMOCRACY</Bubble>*/}
        </Col>
        <Col span={12}>
          EFG
          {/*<SearchField>Suche</SearchField>*/}
        </Col>
        <Col span={6}>
          HIJ
          {/*<Filter />
        <Download>App Downloaden</Download>
        <Support>Unterstützen</Support>*/}
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
