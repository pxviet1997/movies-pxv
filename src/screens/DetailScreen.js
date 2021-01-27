import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const DetailScreen = ({ navigation }) => {

  const movie = navigation.getParam('movie');

  return (
    <View style={styles.container}>
      <Image
        source={{ url: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` }}
        style={styles.imageStyle}
      />
      <Text style={styles.titleStyle}>{movie.title}</Text>
      <Text style={styles.overviewStyle}>{movie.overview}</Text>
      <Text>Release Date: {movie.release_date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 375,
    height: 215,
    marginBottom: 10
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    flexShrink: 1
  },
  overviewStyle: {
    marginBottom: 20,
  }
});

export default DetailScreen;