import PropTypes from 'prop-types';
import styled from 'styled-components';

// Helper
import subjectGroupIconHelper, { subjectGroups, getDisplayTitle } from 'Helpers/subjectGroupToIcon';

// Components
import Button from 'Components/shared/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  min-height: 130px;
  text-align: center;
`;

const SubjectButton = ({ group, onClick, active }) => (
  <Container>
    <Button
      style={{}}
      type={active ? 'primary' : 'dashed'}
      shape="circle"
      size="large"
      onClick={onClick}
      icon={subjectGroupIconHelper(group)}
    />
    {getDisplayTitle(group)}
  </Container>
);

SubjectButton.propTypes = {
  group: PropTypes.oneOf(Object.keys(subjectGroups)).isRequired,
};

export default SubjectButton;
