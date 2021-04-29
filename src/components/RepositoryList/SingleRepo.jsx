import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useParams } from "react-router-native";
import { openURL } from 'expo-linking';
import useRepo from '../../hooks/singleRepo';
import Review from './Review';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    paddingTop: 10
  },
  linkButton: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 10,
    marginHorizontal: 50,
    marginBottom: 20,
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
    const item = result.data.repository;
    const linkHandler = () => {
      openURL(item.url);
    };
    return (
      <View style={styles.container}>
        <RepositoryItem item={item} />
        <View>
          <Text style={styles.linkButton} onPress={linkHandler} >Open in GitHub</Text>
        </View>
        <Review reviews={item.reviews.edges.map(e => e.node)}/>
      </View>
    );
  }
  return <View></View>;
};

export default SingleRepo;