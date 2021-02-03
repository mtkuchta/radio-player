import React, { useState } from 'react';
import styles from './App.module.scss';
import RadioContainer from '../components/RadioContainer/RadioContainer';

function App() {
  const radioStations = [
    {
      id: 'rns',
      name: 'Radio Nowy Świat',
      src: 'https://stream.nowyswiat.online/aac',
      logo: '/rns.jpg',
    },
    {
      id: 'r357',
      name: 'Radio 357',
      src: 'https://stream.rcs.revma.com/ye5kghkgcm0uv',
      logo: '',
    },
  ];

  const [currentStation, setCurrentStation] = useState(null);

  const playRadio = (e) => {
    const stationID = e.target.parentNode.id;
    setCurrentStation(stationID);
  };

  return (
    <div className={styles.App}>
      <RadioContainer radioStations={radioStations} play={playRadio} />
    </div>
  );
}

export default App;
