import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
        <StatusBar style="auto" />
      </ApolloProvider>
    </NativeRouter>
  );
}

