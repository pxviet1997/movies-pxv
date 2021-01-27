import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Movie = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ url: `https://image.tmdb.org/t/p/w200/${movie.poster_path}` }}
        style={styles.imageStyle}
      />
      <View style={styles.textStyle}>
        <Text
          style={styles.movieTitle}
        >
          {movie.title}
        </Text>
        <Text>Rating: {movie.vote_average}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5
  },
  imageStyle: {
    width: 170,
    height: 250,
  },
  textStyle: {
    marginLeft: 10,
    flexShrink: 1
  },
  movieTitle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 20
  }
});

export default Movie;