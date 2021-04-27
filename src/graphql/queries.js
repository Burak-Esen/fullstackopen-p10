import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges{
        node{
          fullName
          description
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          language
          ownerAvatarUrl
          id
        }
      }
    }
  }
`;

export const LOGIN = gql`
  mutation authorize( $credentials: AuthorizeInput! ) {
    authorize( credentials: $credentials) {
      accessToken
    }
  }
`;

export const ME = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_A_REPO = gql`
  query repository($id: String!) {
    repository(id:$id) {
      id
      fullName
      url
    }
  }
`;
