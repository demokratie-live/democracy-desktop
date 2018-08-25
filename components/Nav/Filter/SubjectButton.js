import PropTypes from 'prop-types';

// Helper
import subjectGroupIconHelper, { subjectGroups } from 'Helpers/subjectGroupToIcon';

// Components
import Button from 'Components/shared/Button';

const SubjectButton = ({ group, onClick, active }) => (
  <div>
    <Button
      style={{ marginLeft: 6 }}
      type={active ? 'primary' : 'dashed'}
      shape="circle"
      size="large"
      onClick={onClick}
      icon={subjectGroupIconHelper(group)}
    />
    {group}
  </div>
);

SubjectButton.propTypes = {
  group: PropTypes.oneOf(Object.keys(subjectGroups)).isRequired,
};

export default SubjectButton;
