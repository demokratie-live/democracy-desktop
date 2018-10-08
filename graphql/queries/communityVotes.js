import gql from 'graphql-tag';

export default gql`
  query communityVotes($procedure: ID!) {
    communityVotes(procedure: $procedure) {
      yes
      no
      abstination
    }
  }
`;
