import PropTypes from 'prop-types';

// Components
import Button from 'Components/shared/Button';
import Icon from 'Components/shared/Icon';

const voteOptions = ['thumb-up'];

const backgroundColor = ({ type }) => {
  switch (type) {
    case 'thumb-up':
      return 'rgb(21,192,99)';
    case 'thumb-down':
      return 'rgb(40,130,228)';
    default:
      return 'rgb(236,62,49)';
  }
};

const VoteButton = ({ type }) => (
  <Button
    style={{
      height: '100px',
      width: '100px',
      backgroundColor: backgroundColor({ type }),
      border: 0,
    }}
    type="primary"
    shape="circle"
    size="large"
  >
    <Icon type={type} fontSize={60} />
  </Button>
);

VoteButton.propTypes = {
  type: PropTypes.oneOf(Object.keys(voteOptions)).isRequired,
};

export default VoteButton;
