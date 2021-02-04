import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({
  radioData: { id, name, src, logo },
  play,
  isPlaying,
  currentStation,
}) => {
  return (
    <div className={styles.radio} id={id}>
      <h1 className={styles.radioName}>{name}</h1>
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
