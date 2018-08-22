import { Icon as IconComponent } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const Icon = styled(IconComponent)`
  font-size: ${({ theme }) => theme.fontSizes.huge};
`;

const ActivityIndex = ({ children }) => (
  <Wrapper>
    <Icon type="up" />
    <br />
    {children}
  </Wrapper>
);

export default ActivityIndex;
