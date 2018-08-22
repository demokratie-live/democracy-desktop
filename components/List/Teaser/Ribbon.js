import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  position: relative;
  left: -31px;
  width: 100px;
  height: 34;
`;

const Text = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0 12px;
  color: ${({ theme }) => theme.backgrounds.primary};

  &:before {
    content: '';
    position: absolute;
    display: block;
    border-style: solid;
    border-color: #2b5a81 transparent transparent transparent;
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
