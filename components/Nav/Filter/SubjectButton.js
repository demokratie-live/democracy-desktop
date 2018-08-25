import PropTypes from 'prop-types';

// Helper
import subjectGroupIconHelper, { subjectGroups } from 'Helpers/subjectGroupToIcon';

// Components
import Button from 'Components/shared/Button';
import Icon from 'Components/shared/Icon';

const SubjectButton = ({ group, onClick }) => (
  <div>
    <Button style={{ marginLeft: 6 }} type="primary" shape="circle" size="large" onClick={onClick}>
      <Icon type={subjectGroupIconHelper(group)} />
    </Button>
    {group}
  </div>
);

SubjectButton.propTypes = {
  group: PropTypes.oneOf(Object.keys(subjectGroups)).isRequired,
};

export default SubjectButton;
