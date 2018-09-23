import styled from 'styled-components';

// Components
import Icon from 'Components/shared/Icon';
import Link from 'Components/shared/Link';

const DocIcon = styled(Icon)`
  padding-right: ${({ theme }) => theme.space(1)}px;
`;

const DocumentsPanel = ({ documents }) => (
  <div>
    {' '}
    {documents.map(({ editor, type, url, number }, i) => (
      <div key={i}>
        <DocIcon type="document" />
        <Link href={url} external primary>
          {`${type} (${editor} ${number})`}
        </Link>
      </div>
    ))}
  </div>
);

export default DocumentsPanel;
