import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({ radioData: { id, name, src, logo }, play }) => {
  return (
    <div className={styles.radio} id={id}>
      <h1 className={styles.radioName}>{name}</h1>
      <i className={`far fa-play-circle ${styles.playBtn}`} onClick={play}></i>
    </div>
  );
};

export default Radio;
