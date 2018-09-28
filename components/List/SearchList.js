import { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import TeaserList from './TeaserList';

// Context
import { Consumer as FilterConsumer } from 'Context/filter';

// GraphQL
import SEARCH_PROCEDURES from 'GraphQl/queries/searchProcedures';

const Section = styled.section`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding-left: ${({ theme }) => theme.space(4)}px;
  padding-right: ${({ theme }) => theme.space(4)}px;
  padding-top: ${({ theme }) => theme.space(2)}px;
  padding-bottom: ${({ theme }) => theme.space(4)}px;
`;

class SearchList extends Component {
  render() {
    const { term } = this.props;
    return (
      <Section>
        <FilterConsumer>
          {() => {
            return (
              <>
                <Query
                  query={SEARCH_PROCEDURES}
                  variables={{
                    term: term,
                  }}
                >
                  {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;

                    if (error) {
                      return <p>Error :(</p>;
                    }
                    return (
                      <TeaserList
                        hasMore={false}
                        loadMore={() => {}}
                        procedures={data.searchProceduresAutocomplete.procedures}
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

SearchList.propTypes = {
  term: PropTypes.string.isRequired,
};

export default SearchList;
