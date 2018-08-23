import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.i`
  &:before {
    font-size: 22px;
    position: relative;
    top: 3px;
  }
`;

const IconComponent = ({ type }) => {
  return <Icon className={`icon-${type}`} />;
};

IconComponent.propTypes = {
  type: PropTypes.string.isRequired,
};

export default IconComponent;
