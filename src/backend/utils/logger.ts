
/**
 * Logger Utility
 * 
 * Provides consistent logging across the backend.
 */

export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG'
}

export const logger = {
  log: (level: LogLevel, message: string, data?: any) => {
    const timestamp = new Date().toISOString();
    
    let logFn;
    switch (level) {
      case LogLevel.ERROR:
        logFn = console.error;
        break;
      case LogLevel.WARN:
        logFn = console.warn;
        break;
      case LogLevel.DEBUG:
        logFn = console.debug;
        break;
      case LogLevel.INFO:
      default:
        logFn = console.log;
        break;
    }
    
    if (data) {
      logFn(`[${timestamp}] [${level}]: ${message}`, data);
    } else {
      logFn(`[${timestamp}] [${level}]: ${message}`);
    }
  },
  
  info: (message: string, data?: any) => 
    logger.log(LogLevel.INFO, message, data),
    
  warn: (message: string, data?: any) => 
    logger.log(LogLevel.WARN, message, data),
    
  error: (message: string, data?: any) => 
    logger.log(LogLevel.ERROR, message, data),
    
  debug: (message: string, data?: any) => 
    logger.log(LogLevel.DEBUG, message, data)
};
