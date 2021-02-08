import React, { useRef, useEffect } from 'react';
import styles from './ShowPlaying.module.scss';
import { animation } from '../../helpers/animation';

const ShowPlaying = ({ isPlaying }) => {
  const container = useRef(null);

  useEffect(() => {
    const elements = container.current.children;
    animation(elements);
  }, [isPlaying]);

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
    </div>
  );
};

export default ShowPlaying;
