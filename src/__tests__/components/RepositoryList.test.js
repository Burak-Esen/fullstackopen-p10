import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { getRounded } from '../../components/RepositoryList/RepositoryItem';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
      const [repo1, repo2] = repositories.edges.map(e => e.node);
      expect(getAllByTestId('repoItem')[0]).toHaveTextContent(repo1.fullName);
      expect(getAllByTestId('repoItem')[0]).toHaveTextContent(repo1.description);
      expect(getAllByTestId('repoItem')[0]).toHaveTextContent(repo1.language);
      expect(getAllByTestId('repoItem')[0]).toHaveTextContent(getRounded(repo1.forksCount));
      expect(getAllByTestId('repoItem')[0]).toHaveTextContent(getRounded(repo1.stargazersCount));
      expect(getAllByTestId('repoItem')[0]).toHaveTextContent(getRounded(repo1.ratingAverage));
      expect(getAllByTestId('repoItem')[0]).toHaveTextContent(getRounded(repo1.reviewCount));
      expect(getAllByTestId('repoItem')[1]).toHaveTextContent(repo2.fullName);
      expect(getAllByTestId('repoItem')[1]).toHaveTextContent(repo2.description);
      expect(getAllByTestId('repoItem')[1]).toHaveTextContent(repo2.language);
      expect(getAllByTestId('repoItem')[1]).toHaveTextContent(getRounded(repo2.forksCount));
      expect(getAllByTestId('repoItem')[1]).toHaveTextContent(getRounded(repo2.stargazersCount));
      expect(getAllByTestId('repoItem')[1]).toHaveTextContent(getRounded(repo2.ratingAverage));
      expect(getAllByTestId('repoItem')[1]).toHaveTextContent(getRounded(repo2.reviewCount));
    });
  });
});