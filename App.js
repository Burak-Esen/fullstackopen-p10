import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import createApolloClient from './src/utils/apolloClient';
import StorageContext from './src/contexts/StorageContext';
import storage from './src/utils/storage';
import { Provider as PaperProvider } from 'react-native-paper';
import { rNPaperTheme } from './src/theme';

const apolloClient = createApolloClient();

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <StorageContext.Provider value={storage}>
          <PaperProvider theme={rNPaperTheme}>
            <Main />
            <StatusBar style="auto" />
          </PaperProvider>
        </StorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
}
