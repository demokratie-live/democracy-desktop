import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.i.attrs({})`
  &:before {
    font-size: ${({ fontSize }) => `${fontSize}px`};
    position: relative;
    top: ${({ top }) => `${top}px`};
  }
`;

const IconComponent = ({ type, fontSize, top, className }) => {
  return <Icon className={`icon-${type} ${className}`} fontSize={fontSize} top={top} />;
};

IconComponent.propTypes = {
  type: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  className: PropTypes.string,
  top: PropTypes.number,
};

IconComponent.defaultProps = {
  fontSize: 22,
  className: '',
  top: 4,
};

export default IconComponent;
