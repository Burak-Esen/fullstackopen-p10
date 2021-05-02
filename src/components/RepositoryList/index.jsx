import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import OrderComp from './OrderComp';

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
  const [ queryVariables, setQVariables ] = React.useState();
  
  const { repositories, loading } = useRepositories(queryVariables);
  return (!loading ?
      <View>
        <OrderComp setQVariables={setQVariables} buttonText='Order by...' />
        <RepositoryListContainer repositories={repositories} />
      </View> :
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
        ListFooterComponent={<View style={{height: 100, backgroundColor: 'whitesmoke'}}/>}
      />
  );
};

export default RepositoryList;