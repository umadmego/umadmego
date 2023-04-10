import React from 'react';
import styles from './style.module.css';
function LoadingIndicator({ text }: { text?: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
      {text && <span>{text}</span>}
    </div>
  );
}

export default LoadingIndicator;
