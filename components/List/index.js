import { Component } from 'react';
import { Row, Col, Tag as TagComponent, Icon, Spin as SpinComponent } from 'antd';
import { Query } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

import Dev from 'Components/shared/Dev';
import SelectComponent from 'Components/shared/Select';
import Teaser from './Teaser';

// GraphQL
import PROCEDURES from 'GraphQl/queries/procedures';
const PAGE_SIZE = 15;

const Option = SelectComponent.Option;

const Section = styled.section`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding-left: ${({ theme }) => theme.space(4)}px;
  padding-right: ${({ theme }) => theme.space(4)}px;
  padding-top: ${({ theme }) => theme.space(2)}px;
  padding-bottom: ${({ theme }) => theme.space(4)}px;
`;

const TeaserRow = styled(Row).attrs({
  gutter: ({ theme }) => theme.space(2),
})``;

const TeaserCol = styled(Col).attrs({
  xs: 24,
  sm: 24,
  md: 12,
  lg: 8,
})`
  padding-top: ${({ theme }) => theme.space(1)}px;
  padding-bottom: ${({ theme }) => theme.space(1)}px;
`;

const Spin = styled(SpinComponent)`
  width: 100%;
  padding-top: ${({ theme }) => theme.space(1)}px;
`;

const Select = styled(SelectComponent)`
  float: right;
  & .ant-select-selection {
    background-color: ${({ theme }) => theme.backgrounds.tertiary};
  }
`;

const Tag = styled(TagComponent)`
  background-color: ${({ theme }) => theme.backgrounds.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.default};
  padding-top: 5px;
  padding-bottom: 5px;
  height: 35px;
  border: 0;
`;

class List extends Component {
  state = {
    hasMore: true,
  };

  loadMore = ({ fetchMore }) => page => {
    fetchMore({
      variables: {
        offset: PAGE_SIZE * page,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          this.setState({ hasMore: false });
          return prev;
        }
        return Object.assign({}, prev, {
          procedures: [...prev.procedures, ...fetchMoreResult.procedures],
        });
      },
    });
  };

  render() {
    return (
      <Section>
        <Dev>
          <Row>
            <Col xs={24} sm={24} lg={6}>
              <Tag>
                <Icon type="info-circle" /> in Abstimung
              </Tag>
            </Col>
            <Col xs={24} sm={24} lg={12} />
            <Col xs={24} sm={24} lg={6}>
              <Select
                defaultValue="##Nach Restzeit sortieren"
                onChange={value => console.log(value)}
                prefix="\E619"
              >
                <Option value="timeleft">##Nach Restzeit sortieren</Option>
                <Option value="activity">##Nach Aktivitäten sortieren</Option>
              </Select>
            </Col>
          </Row>
          <Query query={PROCEDURES} variables={{ type: 'VOTING', pageSize: PAGE_SIZE }}>
            {({ loading, error, data: { procedures }, fetchMore }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              return (
                <InfiniteScroll
                  pageStart={0}
                  loadMore={this.loadMore({ fetchMore })}
                  hasMore={this.state.hasMore}
                  loader={<Spin size="large" key="spinner" />}
                >
                  <TeaserRow>
                    {procedures.map(({ procedureId, ...rest }) => (
                      <TeaserCol key={procedureId}>
                        <Teaser procedureId={procedureId} {...rest} />
                      </TeaserCol>
                    ))}
                  </TeaserRow>
                </InfiniteScroll>
              );
            }}
          </Query>
        </Dev>
      </Section>
    );
  }
}

export default List;
