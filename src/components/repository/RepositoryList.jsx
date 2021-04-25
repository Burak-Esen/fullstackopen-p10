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
  const reposData = repositories ? repositories.edges.map(e => e.node) : [];
  return (!loading ?
      <FlatList style={{paddingTop:3, marginBottom:45 }}
        data={reposData}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RepositoryItem}
      /> :
      <View style={styles.loaderCont}>
        <ActivityIndicator style={styles.loader} size='large' color='steelblue' />
      </View>
  );
};

export default RepositoryList;