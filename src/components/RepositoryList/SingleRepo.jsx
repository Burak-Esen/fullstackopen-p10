import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useParams } from "react-router-native";
import { openURL } from 'expo-linking';
import useRepo from '../../hooks/singleRepo';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10
  },
  linkButton: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 10,
    marginHorizontal: 50,
    borderRadius:10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

const SingleRepo = () => {
  const { id } = useParams();
  const { getRepo, result } = useRepo();
  React.useEffect(() => {
    getRepo({ variables: { id } });
  }, [result.data]);
  if (result.data){
    console.log(result.data);
    const item = result.data.repository;
    const linkHandler = () => {
      openURL(item.url);
    };
    return (
      <View style={styles.container}>
        <RepositoryItem item={item} />
        <View>
          <View>
            <Text style={styles.linkButton} onPress={linkHandler} >Open in GitHub</Text>
          </View>
        </View>
      </View>
    );
  }
  return <View></View>;
};

export default SingleRepo;