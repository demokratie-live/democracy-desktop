import styled from 'styled-components';

// Components
import DateTime from 'Components/shared/DateTime';

const DefinitionLists = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 555px) {
    flex-direction: row;
  }
`;

const DefinitionList = styled.dl``;

const DT = styled.dt`
  color: ${({ theme }) => theme.colors.highlight};
  padding-right: ${({ theme }) => theme.space(1)}px;
`;

const DD = styled.dd`
  margin: 0;
`;

const DR = styled.div`
  display: flex;
`;

const DetailsPanel = ({
  subjectGroups,
  currentStatus,
  type,
  procedureId,
  submissionDate,
  voteDate,
  abstract,
}) => (
  <>
    <DefinitionLists>
      <DefinitionList>
        <DT>Sachgebiete</DT>
        {subjectGroups.map(subjectGroup => (
          <DD key={subjectGroup}>{subjectGroup}</DD>
        ))}
        <DT>Aktueller Stand</DT>
        <DD>{currentStatus}</DD>
      </DefinitionList>
      <DefinitionList horizontal>
        <DR>
          <DT>Typ</DT>
          <DD>{type}</DD>
        </DR>
        <DR>
          <DT>Vorgang</DT>
          <DD>{procedureId}</DD>
        </DR>
        <DR>
          <DT>erstellt am</DT>
          <DD>
            <DateTime date={submissionDate} />
          </DD>
        </DR>
        {voteDate && (
          <DR>
            <DT>Abstimmung</DT>
            <DD>
              <DateTime date={voteDate} />
            </DD>
          </DR>
        )}
      </DefinitionList>
    </DefinitionLists>

    <h4>Inhalt</h4>
    {abstract}
  </>
);

export default DetailsPanel;
