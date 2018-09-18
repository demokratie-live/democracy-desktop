import PropTypes from 'prop-types';

// Components
import Button from 'Components/shared/Button';
import Icon from 'Components/shared/Icon';

const voteOptions = ['thumb-up', 'thumb-down', 'thumb-left'];

const backgroundColor = ({ type }) => {
  switch (type) {
    case 'thumb-up':
      return 'rgb(21,192,99)';
    case 'thumb-down':
      return 'rgb(236,62,49)';
    default:
      return 'rgb(40,130,228)';
  }
};

const rotate = ({ type }) => {
  switch (type) {
    case 'thumb-up':
      return 'rotate(0deg)';
    case 'thumb-down':
      return 'rotate(180deg)';
    default:
      return 'rotate(270deg)';
  }
};

const VoteButton = ({ type }) => (
  <Button
    style={{
      height: '125px',
      width: '125px',
      backgroundColor: backgroundColor({ type }),
      transform: rotate({ type }),
      border: 0,
    }}
    type="primary"
    shape="circle"
    size="large"
  >
    <Icon
      type="thumb-up"
      fontSize={75}
      style={{
        width: '125px',
        height: '125px',
        display: 'block',
        paddingTop: '20px',
      }}
    />
  </Button>
);

VoteButton.propTypes = {
  type: PropTypes.oneOf(Object.keys(voteOptions)).isRequired,
};

export default VoteButton;
