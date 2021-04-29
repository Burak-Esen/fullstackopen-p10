import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import theme from '../../theme';

const ratingRadSize = 54;
const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: 'whitesmoke'
  },
  reviewItemCont: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor:'white'
  },
  rating: {
    margin: 10,
    color: theme.colors.primary,
    borderColor:theme.colors.primary,
    borderWidth: 2,
    height: ratingRadSize,
    width: ratingRadSize,
    borderRadius: ratingRadSize/2,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: ratingRadSize/2.5
  },
  revMain: {
    display: 'flex',
    flexDirection: 'column'
  },
  username: {
    fontWeight: 'bold'
  },
  date: {
    color: 'gray'
  },
  text: {
    marginRight: 80
  },
  fontSize: {
    fontSize: 15
  }
});

const ReviewItem = ({ review }) => {
  const date = new Date(review.createdAt);
  const dateL = [date.getDate(), date.getMonth(), date.getFullYear()];
  return (
      <View style={styles.reviewItemCont}>
        <Text style={styles.rating}>{review.rating}</Text>
        <View style={styles.revMain}>
          <Text style={[styles.username, styles.fontSize]}>{review.user.username}</Text>
          <Text style={[styles.date, styles.fontSize]}>{dateL.join('.')}</Text>
          <Text style={[styles.text, styles.fontSize]}>{review.text}</Text>
        </View>
      </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const Review = ({ reviews }) => {
  return (
    <FlatList
      contentContainerStyle={{
        display: 'flex',
        flexDirection: 'column'
      }}
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={ItemSeparator}
      ListFooterComponent={<View style={{height: 300, backgroundColor: 'whitesmoke'}}/>}
    />
  );
};

export default Review;