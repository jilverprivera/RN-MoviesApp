import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteStackParams} from '../Navigator/StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';

interface Props extends StackScreenProps<RouteStackParams, 'MovieScreen'> {}

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const MovieScreen = ({navigation, route}: Props) => {
  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const {isLoading, movieFull, cast} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageDetailContainer}>
        <Image source={{uri}} style={styles.imageDetail} />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.backButton}>
        <Icon name="arrow-back-outline" size={50} color="white" />
      </TouchableOpacity>

      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 5,
          paddingBottom: 20,
          // marginTop: 10,
          justifyContent: 'space-between',
          flexDirection: 'column',
          backgroundColor: '#f0f2f5',
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: screenWidth * 0.65}}>
            <Text style={styles.subTitle}>{movie.original_title}</Text>
            <Text style={styles.title}>{movie.title}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star-outline" size={25} color="#000" />
            <Text style={{fontSize: 20, marginLeft: 10}}>
              {movie.vote_average}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          {isLoading ? (
            <View style={{justifyContent: 'center'}}>
              <ActivityIndicator size={50} color="#000" />
            </View>
          ) : (
            <MovieDetails movieFull={movieFull!} cast={cast} />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageDetailContainer: {
    backgroundColor: '#000',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
    // borderBottomStartRadius: 30,
    // borderBottomEndRadius: 30,
    overflow: 'hidden',
  },

  imageDetail: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 14,
    color: '#c4c4c4',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 100,
    elevation: 9,
  },
});
