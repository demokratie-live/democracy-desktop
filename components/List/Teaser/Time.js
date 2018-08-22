import { Icon } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.primary};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  position: absolute;
  right: 0;
  top: 36px;
  width: auto;
  padding: 5px;
  z-index: 1;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 5px 12px;
  color: ${({ theme }) => theme.colors.default};
  vertical-align: middle;
`;

const Time = ({ children }) => {
  return (
    <Wrapper>
      <Icon type="clock-circle-o" />
      <Text>{children}</Text>
    </Wrapper>
  );
};

Time.displayName = 'Teaser-Time';

export default Time;
