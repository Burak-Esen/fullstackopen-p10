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