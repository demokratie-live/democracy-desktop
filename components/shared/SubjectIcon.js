import { Tooltip } from 'antd';
import PropTypes from 'prop-types';

// Helper
import subjectGroupIconHelper, { subjectGroups } from 'Helpers/subjectGroupToIcon';

// Components
import Button from 'Components/shared/Button';
import Icon from 'Components/shared/Icon';

const SubjectIcon = ({ group }) => (
  <Tooltip placement="bottom" title={group}>
    <Button style={{ marginLeft: 6 }} type="primary" shape="circle" size="large">
      <Icon type={subjectGroupIconHelper(group)} />
    </Button>
  </Tooltip>
);

SubjectIcon.propTypes = {
  group: PropTypes.oneOf(Object.keys(subjectGroups)).isRequired,
};

export default SubjectIcon;
