import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './repository/RepositoryList';
import SignIn from './SignIn';
import { Route, Switch, Redirect } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'whitesmoke'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar backgroundColor='fancy' />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
