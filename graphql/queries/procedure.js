import gql from 'graphql-tag';

export default gql`
  query procedure($id: ID!) {
    procedure(id: $id) {
      listType
      completed
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
      importantDocuments {
        editor
        type
        url
        number
      }
      currentStatusHistory
    }
  }
`;
