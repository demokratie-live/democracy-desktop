import { withRouter } from 'next/router';
import styled from 'styled-components';
import { Tag as AntTag } from 'antd';

// Components
import Icon from 'Components/shared/Icon';

// Helper
import { titleByUrlParam } from '../../lib/helpers/listTypeConvert';

const Tag = styled(AntTag)`
  background-color: ${({ theme }) => theme.backgrounds.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.default};
  padding-top: 5px;
  padding-bottom: 5px;
  height: 35px;
  border: 0;
`;

const ListDescription = ({
  router: {
    query: { listType },
  },
}) => {
  const text = titleByUrlParam(listType);
  return (
    <Tag>
      <Icon type="info" /> {text}
    </Tag>
  );
};

export default withRouter(ListDescription);
