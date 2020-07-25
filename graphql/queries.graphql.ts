import gql from 'graphql-tag';

export const Me = gql`
  query Me {
    me {
      userId
      name
    }
  }
`;
