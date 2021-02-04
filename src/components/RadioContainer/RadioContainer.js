import React from 'react';
import styles from './RadioContainer.module.scss';
import Radio from './Radio/Radio.js';

const RadioContainer = ({
  radioStations,
  play,
  isPlaying,
  currentStation = { currentStation },
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
    </div>
  );
};

export default RadioContainer;
