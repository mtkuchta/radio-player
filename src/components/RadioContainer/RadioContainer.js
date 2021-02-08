import React from 'react';
import PropTypes from 'prop-types';
import Radio from '../Radio/Radio.js';
import VolumePanel from '../VolumePanel/VolumePanel.js';

import styles from './RadioContainer.module.scss';

const RadioContainer = ({
  radioStations,
  play,
  isPlaying,
  currentStation,
  changeVolume,
  isLoaded,
}) => {
  return (
    <div className={styles.radioContainer}>
      <h1 className={styles.title}>Radio Player</h1>
      {radioStations.map((radioStation) => (
        <Radio
          key={radioStation.id}
          radioData={radioStation}
          play={play}
          isPlaying={isPlaying}
          currentStation={currentStation}
          isLoaded={isLoaded}
        />
      ))}
      <div className={styles.empty}></div>
      <VolumePanel changeVolume={changeVolume} />
    </div>
  );
};

RadioContainer.propTypes = {
  radioData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
  }),
  play: PropTypes.func,
  isPlaying: PropTypes.bool,
  currentStation: PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string,
  }),
  isLoaded: PropTypes.bool,
};

export default RadioContainer;
