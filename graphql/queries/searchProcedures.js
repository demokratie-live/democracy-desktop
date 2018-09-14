import gql from 'graphql-tag';

export default gql`
  query search($term: String!) {
    searchProceduresAutocomplete(term: $term) {
      procedures {
        title
        procedureId
        type
        activityIndex {
          activityIndex
        }
        voteDate
        subjectGroups
      }
      autocomplete
    }
  }
`;
