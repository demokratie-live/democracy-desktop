import gql from 'graphql-tag';

export default gql`
  query procedures(
    $offset: Int
    $pageSize: Int
    $listTypes: [ProcedureType!]
    $sort: String
    $filter: ProcedureFilter
  ) {
    procedures(
      offset: $offset
      pageSize: $pageSize
      listTypes: $listTypes
      sort: $sort
      filter: $filter
    ) {
      title
      procedureId
      type
      activityIndex {
        activityIndex
      }
      voteDate
      subjectGroups
    }
  }
`;
