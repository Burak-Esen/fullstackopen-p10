import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  loader: {
    margin: 'auto'
  },
  loaderCont: {
    flex:1,
    justifyContent: 'center'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  return (!loading ?
      <RepositoryListContainer repositories={repositories} /> :
      <View style={styles.loaderCont}>
        <ActivityIndicator style={styles.loader} size='large' color='steelblue' />
      </View>
  );
};

export const RepositoryListContainer = ({ repositories }) => {
  const reposData = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList style={{paddingTop:3, marginBottom:3 }}
        data={reposData}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RepositoryItem}
      />
  );
};

export default RepositoryList;