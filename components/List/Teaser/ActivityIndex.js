import { Icon as IconComponent } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.inactive};
  text-align: center;
  padding: 0;
`;

const Icon = styled(IconComponent)`
  font-size: ${({ theme }) => theme.fontSizes.huge};
  width: 100%;
`;

const Text = styled.div`
  margin-top: -${({ theme }) => theme.space(4)}px;
`;

const ActivityIndex = ({ children }) => (
  <Wrapper>
    <Icon type="up" />
    <Text>{children}</Text>
  </Wrapper>
);

export default ActivityIndex;
