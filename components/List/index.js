import { Row, Col, Tag, Icon, Select } from 'antd';
import { Query } from 'react-apollo';

import Dev from 'Components/shared/Dev';
import Teaser from './Teaser';

// GraphQÖL
import PROCEDURES from 'GraphQl/queries/procedures';

const Option = Select.Option;

const List = () => (
  <section>
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
        <Query query={PROCEDURES} variables={{ type: 'VOTING' }}>
          {({ loading, error, data: { procedures } }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return procedures.map(({ procedureId, ...rest }) => (
              <Teaser key={procedureId} procedureId={procedureId} {...rest} />
            ));
          }}
        </Query>
      </Row>
    </Dev>
  </section>
);

export default List;
