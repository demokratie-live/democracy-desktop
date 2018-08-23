import styled from 'styled-components';

import IconComponent from 'Components/shared/Icon';

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.inactive};
  text-align: center;
  padding: 0;
`;

const Icon = styled(IconComponent).attrs({
  fontSize: 50,
})`
  font-size: ${({ theme }) => theme.fontSizes.huge};
`;

const Text = styled.div`
  margin-top: -${({ theme }) => theme.space(2)}px;
`;

const ActivityIndex = ({ children }) => (
  <Wrapper>
    <Icon type="arrow" />
    <Text>{children}</Text>
  </Wrapper>
);

export default ActivityIndex;
