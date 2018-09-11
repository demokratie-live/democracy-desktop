import { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

// Components
import Modal from 'Components/shared/Modal';
import SubjectButton from './SubjectButton';
import { H3 } from 'Components/shared/Headlines';
import Button from 'Components/shared/Button';

// Helpers
import { subjectGroups } from 'Helpers/subjectGroupToIcon';

// Context
import { Consumer as FilterConsumer } from 'Context/filter';

const Box = styled.div`
    background-color: #fff;
    margin: 138px auto; /* 15% from the top and centered */
    padding: 20px;
    width: 80%; /
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterGroupTitle = styled;

const SubjectGroups = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class FilterBox extends Component {
  render() {
    const { visible, handleVisibleChange } = this.props;
    return (
      <Modal visible={visible} handleVisibleChange={handleVisibleChange}>
        <FilterConsumer>
          {({ state, toggleSubjectGroup, toggleAllSubjectGroups }) => (
            <Box>
              <FilterGroup>
                <H3>Sachgebiete</H3>
                <Button
                  style={{ marginLeft: 6 }}
                  type={state.allSubjectGroups ? 'primary' : 'dashed'}
                  shape="circle"
                  size="large"
                  onClick={toggleAllSubjectGroups}
                  icon={'checkmark'}
                />
                <SubjectGroups>
                  {Object.keys(subjectGroups).map(subjectGroup => (
                    <SubjectButton
                      active={state.subjectGroups.indexOf(subjectGroup) !== -1}
                      key={subjectGroup}
                      group={subjectGroup}
                      onClick={() => toggleSubjectGroup(subjectGroup)}
                    />
                  ))}
                </SubjectGroups>
              </FilterGroup>
            </Box>
          )}
        </FilterConsumer>
      </Modal>
    );
  }
}

export default FilterBox;
