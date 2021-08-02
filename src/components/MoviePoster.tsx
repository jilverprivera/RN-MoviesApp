import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Movie} from '../interface/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  margin?: number;
}

export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
  margin = 0,
}: Props) => {
  console.log(movie.poster_path)
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      style={{width, height, marginHorizontal: margin}}
      activeOpacity={0.75}
      onPress={() => navigate('MovieScreen', movie)}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },

  image: {
    flex: 1,
    borderRadius: 15,
  },
});
