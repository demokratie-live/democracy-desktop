import { Component } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'Components/shared/Modal';
import SubjectButton from './SubjectButton';

// Helpers
import { subjectGroups } from 'Helpers/subjectGroupToIcon';

// Context
import FilterContext from 'Context/filter';

const Box = styled.div`
    background-color: green;
    margin: 138px auto; /* 15% from the top and centered */
    padding: 20px;
    width: 80%; /
`;

class FilterBox extends Component {
  render() {
    return (
      <Modal>
        <Box>
          {Object.keys(subjectGroups).map(subjectGroup => (
            <SubjectButton key={subjectGroup} group={subjectGroup} />
          ))}
          <FilterContext.Consumer>{value => value}</FilterContext.Consumer>
        </Box>
      </Modal>
    );
  }
}

export default FilterBox;
