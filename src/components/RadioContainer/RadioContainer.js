import React from 'react';
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
      <VolumePanel changeVolume={changeVolume} />
    </div>
  );
};

export default RadioContainer;
