import PropTypes from 'prop-types';
import styled from 'styled-components';

const getChar = type => {
  switch (type) {
    default:
      return '\f11e';
  }
};

const Circle = styled.i`
  background-color: ${({ theme }) => theme.colors.disabled};
  border-radius: 50%;
  text-align: center;
  padding: 15px;
  width: 50px;
  &:before {
    font-family: 'democracy';
    margin: auto;
    font-size: ${({ theme }) => theme.fontSizes.large}px;
    content: '${({ type }) => getChar(type)}';
  }
`;

const Demicon = () => <Circle />;

Demicon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Demicon;