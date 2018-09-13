import { Component } from 'react';
import ListTypesList from './ListTypesList';
import SearchList from './SearchList';

// Context
import { Consumer as SearchConsumer } from 'Context/search';

class List extends Component {
  render() {
    return (
      <SearchConsumer>
        {consumerProps => {
          if (!consumerProps) return null;
          const { term } = consumerProps;

          console.log(term);
          if (term.trim()) {
            return <SearchList term={term} />;
          } else {
            return <ListTypesList />;
          }
        }}
      </SearchConsumer>
    );
  }
}

export default List;
