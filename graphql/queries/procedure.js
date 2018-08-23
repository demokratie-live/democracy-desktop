import gql from 'graphql-tag';

export default gql`
  query procedure($id: ID!) {
    procedure(id: $id) {
      title
      procedureId
      type
      activityIndex {
        activityIndex
      }
      voteDate
      subjectGroups
      tags
      abstract
      currentStatus
      submissionDate
    }
  }
`;
