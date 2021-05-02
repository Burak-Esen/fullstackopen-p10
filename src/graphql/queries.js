import { gql } from 'apollo-boost';

const RepoFragment = gql`
  fragment RepoDetails on Repository {
    id
    fullName
    description
    ratingAverage
    reviewCount
    stargazersCount
    forksCount
    language
    ownerAvatarUrl
  }
`;

export const GET_REPOSITORIES = gql`
  query repositories(
      $after: String
      $first: Int
      $orderDirection: OrderDirection
      $orderBy:AllRepositoriesOrderBy
      $searchKeyword: String
      $ownerName: String
    ) {
    repositories (
      after:$after
      first:$first
      orderDirection:$orderDirection
      orderBy:$orderBy
      searchKeyword:$searchKeyword
      ownerName:$ownerName
    ){
      edges{
        node{
          ...RepoDetails
        }
      }
    }
  }
  ${RepoFragment}
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
  query repository($id: ID!) {
    repository(id:$id) {
      ...RepoDetails
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${RepoFragment}
`;

export const CREATE_REVIEW = gql`
  mutation createReview( $review:CreateReviewInput! ) {
    createReview( review:$review ) {
      id
      rating
      user {
        username
      }
      createdAt
      text
      repository {
        id
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser( $user:CreateUserInput! ) {
    createUser( user:$user ) {
      id
    } 
  }
`;
