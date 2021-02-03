import React from 'react';
import styles from './RadioContainer.module.scss';

import Radio from './Radio/Radio.js';

const RadioContainer = ({ radioStations, play }) => {
  return (
    <div className={styles.radioContainer}>
      {radioStations.map((radioStation) => (
        <Radio key={radioStation.id} radioData={radioStation} play={play} />
      ))}
    </div>
  );
};

export default RadioContainer;
