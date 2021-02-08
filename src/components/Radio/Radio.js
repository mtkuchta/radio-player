import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';
import Loader from '../Loader/Loader';
import ShowPlaying from '../ShowPlaying/ShowPlaying.js';

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
      {isLoaded & (id === currentStation.id) && isPlaying ? (
        <ShowPlaying isPlaying={isPlaying} />
      ) : (
        ''
      )}
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

Radio.propTypes = {
  radioData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  play: PropTypes.func,
  isPlaying: PropTypes.bool,
  currentStation: PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string,
  }),
  isLoaded: PropTypes.bool,
};

export default Radio;
