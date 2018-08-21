import { withRouter } from 'next/router';
import { Row, Col, Input, Icon, Select } from 'antd';

import Dev from 'Components/shared/Dev';
import Link from 'Components/shared/Link';

const Option = Select.Option;

const Header = ({ router: { pathname } }) => (
  <nav>
    <Row>
      <Col xs={24} sm={24} lg={6}>
        <Link href="/" secondary>
          <h1>
            <img alt="DEMOCRACY Deutschland" src="/static/images/Bubble.png" width="50" />
            &nbsp;DEMOCRACY
          </h1>
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
      <Dev>
        <Col xs={24} sm={24} lg={6}>
          <Select defaultValue="##19. Bundestag (2017-2021)" onChange={value => console.log(value)}>
            <Option value="19">##19. Bundestag (2017-2021)</Option>
          </Select>
        </Col>
        <Col xs={24} sm={24} lg={12}>
          ##Filter in Abstimmung ##Filter Vergangen ##Filter in Vorbereitung ##Filter What's Hot
        </Col>
        <Col xs={24} sm={24} lg={6} />
      </Dev>
    </Row>
  </nav>
);

export default withRouter(Header);
