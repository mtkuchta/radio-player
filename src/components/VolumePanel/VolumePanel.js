import styles from './VolumePanel.module.scss';

const VolumePanel = ({ changeVolume }) => {
  return (
    <div className={styles.panel}>
      <label htmlFor="volume">Volume:</label>
      <input
        className={styles.volume}
        type="range"
        id="volume"
        min="0"
        max="1"
        step="0.1"
        onChange={changeVolume}
      />
    </div>
  );
};

export default VolumePanel;
