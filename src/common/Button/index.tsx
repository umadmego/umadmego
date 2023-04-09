import React from 'react';
import styles from './styles.module.css';

function Button({
  className,
  type = 'button',
  onClick,
  style,
  children,
}: {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <button
      type={type}
      className={className + ' ' + styles.button}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
