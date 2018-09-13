import styled from 'styled-components';
import { Input as AntInput } from 'antd';

import Icon from 'Components/shared/Icon';

// Context
import { Consumer as SearchConsumer } from 'Context/search';

const Input = styled(AntInput)`
  height: 45px;
  border-radius: 3px;
  padding-right: ${({ theme }) => theme.space(2)}px;

  & .ant-input {
    background-color: ${({ theme }) => theme.backgrounds.secondary};
  }
`;

const Suche = () => (
  <SearchConsumer>
    {consumerProps => {
      if (!consumerProps) return null;
      const { term, changeSearchTerm } = consumerProps;

      return (
        <Input
          placeholder="Suche"
          onChange={({ target: { value } }) => changeSearchTerm(value)}
          value={term}
          prefix={<Icon type="search" />}
        />
      );
    }}
  </SearchConsumer>
);

export default Suche;
