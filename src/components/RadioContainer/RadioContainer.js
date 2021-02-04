import React from 'react';
import styles from './RadioContainer.module.scss';
import Radio from '../Radio/Radio.js';
import VolumePanel from '../VolumePanel/VolumePanel.js';

const RadioContainer = ({
  radioStations,
  play,
  isPlaying,
  currentStation,
  changeVolume,
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
        />
      ))}
      <VolumePanel changeVolume={changeVolume} />
    </div>
  );
};

export default RadioContainer;
