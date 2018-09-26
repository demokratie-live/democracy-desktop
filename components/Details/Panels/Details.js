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
  dt:not(:first-child) {
    padding-top: ${({ theme }) => theme.space(1)}px;
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

const Table = styled.table``;

const TR = styled.tr``;

const TH = styled.th`
  font-weight: normal;
  text-align: right;
  color: ${({ theme }) => theme.colors.highlight};
  padding-right: ${({ theme }) => theme.space(1)}px;
`;

const TD = styled.td``;

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
      <Table>
        <TR>
          <TH>Typ</TH>
          <TD>{type}</TD>
        </TR>
        <TR>
          <TH>Vorgang</TH>
          <TD>{procedureId}</TD>
        </TR>
        <TR>
          <TH>erstellt am</TH>
          <TD>
            <DateTime date={submissionDate} />
          </TD>
        </TR>
        {voteDate && (
          <TR>
            <TH>Abstimmung</TH>
            <TD>
              <DateTime date={voteDate} />
            </TD>
          </TR>
        )}
      </Table>
    </DefinitionLists>

    <h4>Inhalt</h4>
    {abstract}
  </>
);

export default DetailsPanel;
