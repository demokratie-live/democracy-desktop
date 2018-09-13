import { withRouter } from 'next/router';
import styled from 'styled-components';
import { Tag as AntTag, Tooltip } from 'antd';

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

const descriptions = {
  'in-abstimmung':
    'In dieser Liste findest Du alle Gesetze und Anträge des Bundestages, die unmittelbar vor der Abstimmung stehen',
  vergangen:
    'In dieser Liste findest Du alle vergangenen, bereits abgestimmten Gesetze und Anträge des Bundestages',
  'in-vorbereitung':
    'In dieser Liste findest Du alle Gesetze und Anträge des Bundestages, für die noch keine Beschlussempfehlung vorliegt oder dessen 2. Lesung noch nicht auf der Tagesordnung platziert ist',
  'whats-hot':
    'In dieser Liste findest Du die heißesten Gesetze und Anträge des Bundestages absteigend sortiert nach DEMOCRACY-Aktivitätsindex',
};

const ListDescription = ({
  router: {
    query: { listType },
  },
}) => {
  const text = titleByUrlParam(listType);
  return (
    <Tooltip title={descriptions[listType]} placement="bottomLeft">
      <Tag>
        <Icon type="info" /> {text}
      </Tag>
    </Tooltip>
  );
};

export default withRouter(ListDescription);
