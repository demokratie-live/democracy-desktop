import gql from 'graphql-tag';

export default gql`
  query procedures(
    $offset: Int
    $pageSize: Int
    $type: ProcedureType!
    $sort: String
    $filter: ProcedureFilter
  ) {
    procedures(offset: $offset, pageSize: $pageSize, type: $type, sort: $sort, filter: $filter) {
      title
      procedureId
      type
    }
  }
`;
