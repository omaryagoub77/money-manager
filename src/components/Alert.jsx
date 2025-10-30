import React from 'react';
import './Alert.css';

const Alert = ({ type, message, onClose, toast = false, showProgress = false }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return 'ℹ';
    }
  };

  const alertClass = `alert alert-${type} ${toast ? 'alert-toast' : ''}`;

  return (
    <div className={alertClass}>
      <div className="alert-icon">{getIcon()}</div>
      <div className="alert-content">{message}</div>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          ✕
        </button>
      )}
      {showProgress && toast && (
        <div className="alert-progress">
          <div className="alert-progress-bar"></div>
        </div>
      )}
    </div>
  );
};

export default Alert;