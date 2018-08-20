import { Row, Col, Tag, Icon, Select } from 'antd';
import Dev from 'Components/shared/Dev';
import Teaser from './Teaser';

const Option = Select.Option;

const List = () => (
  <list>
    <Dev>
      <Row>
        <Col xs={24} sm={24} lg={6}>
          <Tag>
            <Icon type="info" />
            ##in Abstimung
          </Tag>
        </Col>
        <Col xs={24} sm={24} lg={12} />
        <Col xs={24} sm={24} lg={6}>
          <Icon type="arrow-down" />
          <Select defaultValue="##Nach Restzeit sortieren" onChange={value => console.log(value)}>
            <Option value="timeleft">##Nach Restzeit sortieren</Option>
            <Option value="activity">##Nach Aktivitäten sortieren</Option>
          </Select>
        </Col>
      </Row>
      <Row>
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
      </Row>
    </Dev>
  </list>
);

export default List;
