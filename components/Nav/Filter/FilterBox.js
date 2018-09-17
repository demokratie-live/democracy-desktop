import { Component } from 'react';
import styled from 'styled-components';

// Components
import SubjectButton from './SubjectButton';
import DocumentTypeButton from './DocumentTypeButton';
import { H3 } from 'Components/shared/Headlines';
import Button from 'Components/shared/Button';

// Helpers
import { subjectGroups } from 'Helpers/subjectGroupToIcon';

// Context
import { Consumer as FilterConsumer } from 'Context/filter';

const Box = styled.div`
  background-color: #fdfdfd;
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    padding: 20px;
    margin: 138px auto;
    width: 80%;
  }
`;

const FilterGroup = styled.div`
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    display: flex;
    flex-direction: row;
  }
`;

const FilterGroupTitle = styled.div`
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    display: flex;
    flex-direction: column;
    width: 110px;
  }
`;

const SubjectGroups = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    padding-top: 32px;
  }
`;

const AllButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  text-align: center;
`;

class FilterBox extends Component {
  render() {
    return (
      <FilterConsumer>
        {({ state, toggleSubjectGroup, toggleAllSubjectGroups, toggleType, toggleAllTypes }) => (
          <Box>
            <FilterGroup>
              <FilterGroupTitle>
                <H3>Sachgebiete</H3>
                <AllButton>
                  <Button
                    type={state.allSubjectGroups ? 'primary' : 'dashed'}
                    shape="circle"
                    size="large"
                    onClick={toggleAllSubjectGroups}
                    icon={'checkmark'}
                  />
                  Alle
                </AllButton>
              </FilterGroupTitle>
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
            <FilterGroup>
              <FilterGroupTitle>
                <H3>Vorgangstypen</H3>
                <AllButton>
                  <Button
                    type={state.allTypes ? 'primary' : 'dashed'}
                    shape="circle"
                    size="large"
                    onClick={toggleAllTypes}
                    icon={'checkmark'}
                  />
                  Alle
                </AllButton>
              </FilterGroupTitle>
              <SubjectGroups>
                <DocumentTypeButton
                  active={state.types.indexOf('Gesetzgebung') !== -1}
                  icon="paragraph"
                  title="Gesetze"
                  onClick={() => toggleType('Gesetzgebung')}
                />
                <DocumentTypeButton
                  active={state.types.indexOf('Antrag') !== -1}
                  icon="document"
                  title="Anträge"
                  onClick={() => toggleType('Antrag')}
                />
              </SubjectGroups>
            </FilterGroup>
          </Box>
        )}
      </FilterConsumer>
    );
  }
}

export default FilterBox;
