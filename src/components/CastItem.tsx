import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interface/movieCreditsInterface';

interface Props {
  actor: Cast;
}

const screenWidth = Dimensions.get('window').width;

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 60, height: 60, borderRadius: 10, marginRight: 10}}
        />
      )}
      <View>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 14, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
    paddingRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor:"#c4c4c4"
  },
});
