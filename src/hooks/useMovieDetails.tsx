import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, MovieCastInterface} from '../interface/movieCreditsInterface';
import { MovieDetailsInterface } from '../interface/movieDetailInterface';

interface MovieDetails {
  isLoading: boolean;
  cast: Cast[];
  movieFull?: MovieDetailsInterface;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieDetailsInterface>(`/${movieId}`);
    const movieCreditsPromise = movieDB.get<MovieCastInterface>(
      `/${movieId}/credits`,
    );

    const [movieDetailResp, movieCreditsResp] = await Promise.all([
      movieDetailsPromise,
      movieCreditsPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailResp.data,
      cast: movieCreditsResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
