import React, { useState } from 'react';
import styles from './App.module.scss';
import RadioContainer from '../components/RadioContainer/RadioContainer';
import ReactHowler from 'react-howler';

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

  const [currentStation, setCurrentStation] = useState({
    id: '',
    src: ' ',
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const playRadio = (e) => {
    const stationID = e.target.parentNode.id;
    const newStation = radioStations.find((radio) => radio.id === stationID)
      .src;
    if (isPlaying && currentStation.id === stationID) {
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(true);
    }
    setCurrentStation({ id: stationID, src: newStation });
  };

  const changeVolume = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className={styles.App}>
      <RadioContainer
        radioStations={radioStations}
        play={playRadio}
        isPlaying={isPlaying}
        currentStation={currentStation}
        changeVolume={changeVolume}
      />
      <ReactHowler
        src={currentStation.src}
        html5={true}
        playing={isPlaying}
        preload={true}
        volume={volume}
      />
    </div>
  );
}

export default App;
