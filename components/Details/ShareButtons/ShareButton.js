import PropTypes from 'prop-types';

// Components
import Button from 'Components/shared/Button';
import Icon from 'Components/shared/Icon';

const shareTypes = ['facebook', 'twitter', 'mail'];

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
  type: PropTypes.oneOf(shareTypes).isRequired,
};

export default ShareButton;
