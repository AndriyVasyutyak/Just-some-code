import React, { FC } from 'react';
import styles from './MovieItem.module.scss';

interface MovieItemProps {
  title :string
}

const MovieItem: FC<MovieItemProps> = ({title}) => (
  <div className={styles.MovieItem}>
    {title}
  </div>
);

export default MovieItem;
