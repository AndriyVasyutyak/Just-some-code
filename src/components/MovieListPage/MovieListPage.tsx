import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MovieListPage.module.scss";
import { fetchMoviesList } from "../../app/reducers/movies.reducer";
import MovieItem from "../MovieItem/MovieItem";

interface MovieListPageProps {}

const MovieListPage: FC<MovieListPageProps> = () => {
  const dispatch = useDispatch();
  const popularFilms = useSelector((state: any) => state?.movies.popular);
  // const fetchData = () => {
  //   dispatch(fetchMoviesList(1))
  // }
 
  

  return (
    <div className={styles.MovieListPage}>
     <button onClick={()=> {}}>Recieve Films</button>
    </div>
  );
};

export default MovieListPage;
