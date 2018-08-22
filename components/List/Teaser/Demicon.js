import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DevComponent from 'Components/shared/Dev';

const getChar = type => {
  switch (type) {
    default:
      return '\f11e';
  }
};

const Dev = styled(DevComponent)`
  display: inline;
`;

const Circle = styled.i`
  background-color: ${({ theme }) => theme.colors.disabled};
  border-radius: 50%;
  padding: 15px;
  &:before {
    font-family: 'democracy';
    font-size: ${({ theme }) => theme.fontSizes.default};
    color: ${({ theme }) => theme.backgrounds.primary};
    content: '${({ type }) => getChar(type)}';
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.link};
  }
`;

const Demicon = ({ tooltip }) => (
  <Tooltip placement="bottom" title={tooltip}>
    <Dev>
      <Circle />
    </Dev>
  </Tooltip>
);

Demicon.propTypes = {
  type: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
};
Demicon.defaultProps = {
  tooltip: '',
};

export default Demicon;
