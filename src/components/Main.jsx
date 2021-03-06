import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SingleRepo from './RepositoryList/SingleRepo';
import SignIn from './SignIn';
import { Route, Switch, Redirect } from 'react-router-native';
import CreateReview from './CreateReview';
import SignUp from './SignUp';

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
        <Route path="/repo/:id" exact>
          <SingleRepo />
        </Route>
        <Route path="/createReview" exact>
          <CreateReview />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
