import React, {Fragment} from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interface/movieCreditsInterface';
import {MovieDetailsInterface} from '../interface/movieDetailInterface';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieDetailsInterface;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <Fragment>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <Text style={{fontSize: 15}}>{movieFull.id}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 15}}>{movieFull.overview}</Text>
        </View>
          <Text style={{fontSize: 15}}>{movieFull.release_date}</Text>
      </View>
      <View style={{borderTopWidth: 2}}>
        <FlatList
          data={cast}
          horizontal={true}
          renderItem={({item}) => <CastItem actor={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </Fragment>
  );
};
