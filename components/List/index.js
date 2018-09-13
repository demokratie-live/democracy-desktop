import { Component } from 'react';
import { Row, Col, Spin as SpinComponent } from 'antd';
import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

import Dev from 'Components/shared/Dev';
import SelectComponent from 'Components/shared/Select';
import Teaser from './Teaser';

// Helper
import { listTypeUrlToQueryParam as getListType } from '../../lib/helpers/listTypeConvert';

// Context
import { Consumer as FilterConsumer } from 'Context/filter';

// GraphQL
import PROCEDURES from 'GraphQl/queries/procedures';
import ListDesctiption from './ListDescription';
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

class List extends Component {
  state = {
    hasMore: true,
  };

  componentDidUpdate({
    router: {
      query: { listType },
    },
  }) {
    if (listType !== this.props.router.query.listType) {
      this.setState({ hasMore: true });
    }
    return null;
  }

  loadMore = ({ fetchMore }) => page => {
    fetchMore({
      variables: {
        offset: PAGE_SIZE * page,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        if (fetchMoreResult.procedures.length === 0) {
          this.setState({ hasMore: false });
        }
        return Object.assign({}, prev, {
          procedures: [...prev.procedures, ...fetchMoreResult.procedures],
        });
      },
    });
  };

  render() {
    const {
      router: {
        query: { listType },
      },
    } = this.props;
    return (
      <Section>
        <FilterConsumer>
          {filterConsumer => {
            if (!filterConsumer) return null;
            const { state, changeSort } = filterConsumer;
            return (
              <>
                <Row>
                  <Col xs={24} sm={24} lg={6}>
                    <Dev>
                      <ListDesctiption />
                    </Dev>
                  </Col>
                  <Col xs={24} sm={24} lg={12} />
                  <Col xs={24} sm={24} lg={6}>
                    <Dev>
                      {state.sorters[listType].all.length > 0 && (
                        <Select
                          value={state.sorters[listType].sortBy}
                          onChange={sort => changeSort({ listType, sort })}
                          prefix="\E619"
                        >
                          {state.sorters[listType].all.map(({ title, value }) => (
                            <Option key={`${listType}-${value}`} value={value}>
                              {title}
                            </Option>
                          ))}
                        </Select>
                      )}
                    </Dev>
                  </Col>
                </Row>
                <Query
                  query={PROCEDURES}
                  variables={{
                    listTypes: [getListType(listType)],
                    filter: { subjectGroups: state.subjectGroups },
                    pageSize: PAGE_SIZE,
                    sort: state.sorters[listType].sortBy,
                  }}
                >
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
              </>
            );
          }}
        </FilterConsumer>
      </Section>
    );
  }
}

export default withRouter(List);
