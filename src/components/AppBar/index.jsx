import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import { Link } from "react-router-native";
import useMe from '../../hooks/useMe';
import { useContext } from 'react';
import StorageContext from '../../contexts/StorageContext';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  background :{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 40,
  },
  fancyColor: {
    color:theme.colors.fancyHeaderBar
  },
  barTabCont: {
    display:'flex',
    flexDirection: 'row',
  },
  links: {
    marginHorizontal:10
  }
});

const AppBar = ({ backgroundColor }) => {
  const storage = useContext(StorageContext);
  const apolloClient = useApolloClient();
  const { me, loading } = useMe();
  const SignOutHandler =  async () => {
    if (!loading && me){
      await storage.removeData('accessToken');
      await apolloClient.resetStore();
    }
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['white', backgroundColor==='fancy' ? styles.fancyColor.color : backgroundColor]}
        style={styles.background}
      />
      
      <View style={styles.barTabCont}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Link style={styles.links} to='/' component={TouchableOpacity} activeOpacity={0.1}>
            <AppBarTab header='Repositories' color='textPrimary' />
          </Link>
          { !me && !loading ?
            <>
              <Link style={styles.links} to='/signin' component={TouchableOpacity} activeOpacity={0.1}>
                <AppBarTab header='Sign In' color='textPrimary' />
              </Link> 
              <Link style={styles.links} to='/signup' component={TouchableOpacity} activeOpacity={0.1}>
                <AppBarTab header='Sign Up' color='textPrimary' />
              </Link> 
            </> :
            <>
              <Link onPress={SignOutHandler} style={styles.links} to='/' component={TouchableOpacity} activeOpacity={0.1}>
                <AppBarTab header='Sign Out' color='textPrimary' />
              </Link>
              <Link to='/createReview' style={styles.links} component={TouchableOpacity} activeOpacity={0.1}>
                <AppBarTab header='Create a review' color='textPrimary' />
              </Link>
            </>
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default AppBar;