import styled from 'styled-components';
import { Input as AntInput } from 'antd';

import Icon from 'Components/shared/Icon';

const Input = styled(AntInput)`
  height: 45px;
  border-radius: 3px;
  padding-right: ${({ theme }) => theme.space(2)}px;

  & .ant-input {
    background-color: ${({ theme }) => theme.backgrounds.secondary};
  }
`;

const Suche = () => (
  <Input
    placeholder="Suche"
    onChange={value => console.log(value)}
    prefix={<Icon type="search" />}
  />
);

export default Suche;
