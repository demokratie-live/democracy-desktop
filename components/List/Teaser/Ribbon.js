import styled from 'styled-components';
import { darken } from 'polished';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  position: relative;
  left: -31px;
  display: inline-block;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0 12px;
  color: ${({ theme }) => theme.backgrounds.primary};
  vertical-align: middle;

  &:before {
    content: '';
    position: absolute;
    display: block;
    border-style: solid;
    border-color: transparent;
    border-top-color: ${({ theme }) => darken(0.2, theme.colors.primary)};
    bottom: -5px;
    left: 0;
    border-width: 5px 0 0 7px;
  }
`;

const Ribbon = ({ children }) => {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

Ribbon.displayName = 'Ribbon';

export default Ribbon;
