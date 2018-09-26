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
      voteResults {
        yes
        no
        abstination
        notVoted
        decisionText
        namedVote
      }
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
