import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  item: {
    margin:3,
    backgroundColor: 'white',
    padding:5,
    paddingTop: 10,
    paddingHorizontal:7,
    borderRadius: 10,
    display:'flex',
    flexDirection: 'column'
  },
  container: {
    marginVertical: 2,
    marginHorizontal: 7
  },
  highlight: {
    borderRadius:12
  },
  itdContainer: {
    display:'flex',
    flexDirection:'row'
  },
  imgCont: {
    // backgroundColor:'yellow'
  },
  tdCont: {
    // backgroundColor:'blue',
    marginRight:30,
    display:'flex',
    flexDirection: 'column',
    alignContent:'flex-start'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5
  },
  title: {
    // backgroundColor: 'yellow',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 5
  },
  description: {
    // backgroundColor: 'yellow',
    fontSize: 15,
    margin: 5,
    // textAlign: 'left',
    color:'gray'
  },
  langCont: {
    backgroundColor: '#0366d6',
    borderRadius:5,
    margin: 5,
    padding: 5,
    color:'white',
    alignSelf: 'flex-start'
  },
  detailsCont: {
    display:'flex',
    flexDirection: 'row'
  },
  detailItems: {
    display:'flex',
    flex:1,
    flexDirection:'column'
  },
  fontType: {
    fontFamily: theme.fonts.main
  }
});

const getRounded = n => {
  return n > 999 ? String((n/1000).toFixed(1)).endsWith('0') ? (n/1000).toFixed(0) + 'K' : (n/1000).toFixed(1) + 'K' : n;
};
const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight underlayColor={theme.colors.fancyHeaderBar} style={styles.highlight} onPress={()=>null}>
        <View style={styles.item}>
          <View style={styles.itdContainer}>
            <View style={styles.imgCont}>
              <Image style={styles.avatar} source={{uri:item.ownerAvatarUrl}} />
            </View>
            <View style={styles.tdCont}>
              <Text style={[styles.title, styles.fontType]}>{item.fullName}</Text>
              <Text style={[styles.description, styles.fontType]}>{item.description}</Text>
              <Text style={[styles.langCont, styles.fontType]}>{item.language}</Text>
            </View>
          </View>
          <View style={styles.detailsCont}>
            <View style={styles.detailItems}>
              <Text style={[styles.title, styles.fontType]}>{getRounded(item.stargazersCount)}</Text>
              <Text style={[styles.description, styles.fontType]}>Stars</Text>
            </View>
            <View style={styles.detailItems}>
              <Text style={[styles.title, styles.fontType]}>{getRounded(item.forksCount)}</Text>
              <Text style={[styles.description, styles.fontType]}>Forks</Text>
            </View>
            <View style={styles.detailItems}>
              <Text style={[styles.title, styles.fontType]}>{getRounded(item.reviewCount)}</Text>
              <Text style={[styles.description, styles.fontType]}>Reviews</Text>
            </View>
            <View style={styles.detailItems}>
              <Text style={[styles.title, styles.fontType]}>{getRounded(item.ratingAverage)}</Text>
              <Text style={[styles.description, styles.fontType]}>Rating</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default RepositoryItem;