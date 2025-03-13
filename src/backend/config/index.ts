
/**
 * Backend Configuration
 * 
 * Central place for configuration settings.
 */

export const backendConfig = {
  version: '0.1.0',
  environment: process.env.NODE_ENV || 'development',
  apiPrefix: '/api/v1',
  auth: {
    tokenExpiration: '24h',
    saltRounds: 10
  },
  cors: {
    allowedOrigins: ['http://localhost:5173']
  }
};
