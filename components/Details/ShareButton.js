import PropTypes from 'prop-types';

// Components
import Button from 'Components/shared/Button';
import Icon from 'Components/shared/Icon';

const voteOptions = ['thumb-up', 'thumb-down', 'thumb-left'];

const ShareButton = ({ type }) => (
  <Button
    style={{
      height: '55px',
      width: '55px',
      backgroundColor: 'transparent',
      color: 'rgb(143,142,148)',
      border: '2px solid rgb(143,142,148)',
      float: 'right',
      marginBottom: '15px',
    }}
    type="primary"
    shape="circle"
    size="large"
  >
    <Icon
      type={type}
      fontSize={30}
      style={{
        width: '51px',
        height: '55px',
        display: 'block',
        paddingTop: '7px',
      }}
    />
  </Button>
);

ShareButton.propTypes = {
  type: PropTypes.oneOf(Object.keys(voteOptions)).isRequired,
};

export default ShareButton;
