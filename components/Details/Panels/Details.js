import styled from 'styled-components';

const DefinitionList = styled.dl``;

const DT = styled.dt`
  color: ${({ theme }) => theme.colors.highlight};
`;

const DD = styled.dd``;

const DetailsPanel = ({ subjectGroups }) => (
  <>
    <DefinitionList>
      <DT>Sachgebiete</DT>
      {subjectGroups.map(subjectGroup => (
        <DD key={subjectGroup}>{subjectGroup}</DD>
      ))}
    </DefinitionList>
    {/* <DetailHead>Sachgebiete</DetailHead>
                      <br />
                      {subjectGroups(procedure.subjectGroups)}
                      <br />
                      <DetailHead>Aktueller Stand</DetailHead>
                      <br />
                      {procedure.currentStatus}
                      <br />
                      <br />

                      <ColDetail>
                        <DetailHead>Typ</DetailHead>
                      </ColDetail>
                      {procedure.type}

                      <ColDetail>
                        <DetailHead>Vorgang</DetailHead>
                      </ColDetail>

                      {procedure.procedureId}

                      <ColDetail>
                        <DetailHead>erstellt am</DetailHead>
                      </ColDetail>

                      <DateTime date={procedure.submissionDate} />

                      <ColDetail>
                        <DetailHead>Abstimmung</DetailHead>
                      </ColDetail>

                      <DateTime date={procedure.voteDate} fallback="N/A" />

                      <DetailHead>Inhalt</DetailHead>
                      <br />
                      {procedure.abstract} */}
  </>
);

export default DetailsPanel;
