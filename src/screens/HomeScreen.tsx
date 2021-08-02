import React, {useContext} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../hooks/useMovies';

import {MoviePoster} from '../components/MoviePoster';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';

import {getColors} from '../helpers/getColors';
import {GradientContext} from '../context/contextGradient';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, upComing, topRated, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  const {setMainColor} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const [primary = '#f0f2f5', secondary = '#333'] = await getColors(uri);

    setMainColor({primary, secondary});
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="#617d98" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top}}>
          <View style={{height: 420, marginTop: 20}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title="Populars" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="UpComing" movies={upComing} />

          {/* <View
          style={{
            height: 270,
            backgroundColor: '#f0f2f5',
            paddingVertical: 10,
            marginHorizontal: 5,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}>
            Populars
          </Text>
          <FlatList
            data={nowPlaying}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} width={150} height={220} margin={5} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View> */}
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
