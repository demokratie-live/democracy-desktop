import { Component } from 'react';
import { Row, Col } from 'antd';
import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import Dev from 'Components/shared/Dev';
import SelectComponent from 'Components/shared/Select';
import TeaserList from './TeaserList';

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

const Select = styled(SelectComponent)`
  float: right;
  & .ant-select-selection {
    background-color: ${({ theme }) => theme.backgrounds.tertiary};
  }
`;

class ListTypesList extends Component {
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
                      <TeaserList
                        hasMore={this.state.hasMore}
                        loadMore={this.loadMore({ fetchMore })}
                        procedures={procedures}
                      />
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

export default withRouter(ListTypesList);
