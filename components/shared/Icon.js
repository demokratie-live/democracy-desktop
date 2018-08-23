import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.i.attrs({})`
  &:before {
    font-size: ${({ fontSize }) => `${fontSize}px`};
    position: relative;
    top: 4px;
  }
`;

const IconComponent = ({ type, fontSize }) => {
  return <Icon className={`icon-${type}`} fontSize={fontSize} />;
};

IconComponent.propTypes = {
  type: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};

IconComponent.defaultProps = {
  fontSize: 22,
};

export default IconComponent;
