import { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

// Components
import Modal from 'Components/shared/Modal';
import SubjectButton from './SubjectButton';

// Helpers
import { subjectGroups } from 'Helpers/subjectGroupToIcon';

// Context
import { Consumer as FilterConsumer } from 'Context/filter';

const Box = styled.div`
    background-color: green;
    margin: 138px auto; /* 15% from the top and centered */
    padding: 20px;
    width: 80%; /
`;

class FilterBox extends Component {
  render() {
    const { visible, handleVisibleChange } = this.props;
    return (
      <Modal visible={visible} handleVisibleChange={handleVisibleChange}>
        <FilterConsumer>
          {({ state, toggleSubjectGroup }) => (
            <Box>
              {Object.keys(subjectGroups).map(subjectGroup => (
                <SubjectButton
                  active={state.subjectGroups.indexOf(subjectGroup) > 1}
                  key={subjectGroup}
                  group={subjectGroup}
                  onClick={() => toggleSubjectGroup(subjectGroup)}
                />
              ))}
              {state.subjectGroups}
            </Box>
          )}
        </FilterConsumer>
      </Modal>
    );
  }
}

export default FilterBox;
