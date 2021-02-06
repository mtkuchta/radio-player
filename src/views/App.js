import React, { useState } from 'react';
import styles from './App.module.scss';
import RadioContainer from '../components/RadioContainer/RadioContainer';
import ReactHowler from 'react-howler';
import { radioStations } from '../assets/radioStations';

function App() {
  const [currentStation, setCurrentStation] = useState({
    id: '',
    src: ' ',
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlaying = (isPlaying, currentStation, stationID) => {
    if (isPlaying && currentStation.id === stationID) {
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(true);
    }
  };

  const playRadio = (e) => {
    const stationID = e.target.parentNode.id;
    const newStation = radioStations.find((radio) => radio.id === stationID)
      .src;
    if (!(stationID === currentStation.id)) {
      console.log('jestem');
      setIsLoaded(false);
    }
    handlePlaying(isPlaying, currentStation, stationID);
    setCurrentStation({ id: stationID, src: newStation });
  };

  const changeVolume = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
  };

  const hideLoader = () => {
    setIsLoaded(true);
  };

  return (
    <div className={styles.App}>
      <RadioContainer
        radioStations={radioStations}
        play={playRadio}
        isPlaying={isPlaying}
        currentStation={currentStation}
        changeVolume={changeVolume}
        isLoaded={isLoaded}
      />
      <ReactHowler
        src={currentStation.src}
        html5={true}
        playing={isPlaying}
        onLoad={hideLoader}
        volume={volume}
      />
    </div>
  );
}

export default App;
