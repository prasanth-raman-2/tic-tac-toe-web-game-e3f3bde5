/**
 * Simple logging utility with different log levels and timestamps
 */
class Logger {
  static LEVELS = {
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR'
  };

  static getTimestamp() {
    return new Date().toISOString();
  }

  static formatMessage(level, message, data = null) {
    const timestamp = this.getTimestamp();
    const dataString = data ? ` | Data: ${JSON.stringify(data)}` : '';
    return `[${timestamp}] ${level}: ${message}${dataString}`;
  }

  static debug(message, data = null) {
    if (process.env.NODE_ENV === 'development') {
      console.debug(this.formatMessage(this.LEVELS.DEBUG, message, data));
    }
  }

  static info(message, data = null) {
    console.info(this.formatMessage(this.LEVELS.INFO, message, data));
  }

  static warn(message, data = null) {
    console.warn(this.formatMessage(this.LEVELS.WARN, message, data));
  }

  static error(message, error = null) {
    console.error(this.formatMessage(this.LEVELS.ERROR, message, error));
    if (error && error.stack) {
      console.error(error.stack);
    }
  }

  static gameEvent(eventType, data = null) {
    this.info(`Game Event - ${eventType}`, data);
  }
}

export default Logger;
