import React from 'react';
import styles from './Radio.module.scss';
import Loader from '../Loader/Loader';

const Radio = ({
  radioData: { id, name },
  play,
  isPlaying,
  currentStation,
  isLoaded,
}) => {
  return (
    <div className={styles.radio} id={id}>
      <h1 className={styles.radioName}>{name}</h1>
      {!isLoaded & (id === currentStation.id) && isPlaying ? <Loader /> : ''}
      <i
        className={
          isPlaying & (id === currentStation.id)
            ? `far fa-stop-circle ${styles.playBtn}`
            : `far fa-play-circle ${styles.playBtn}`
        }
        onClick={play}
      ></i>
    </div>
  );
};

export default Radio;
