
/**
 * Backend Entry Point
 * 
 * This file serves as the main entry point for the backend code.
 * It exports all the necessary modules and services.
 */

import { authService } from './services/authService';
import { assetService } from './services/assetService';
import { logger } from './utils/logger';
import { backendConfig } from './config';
import { apiRoutes } from './api';

// Re-export everything for easier imports
export {
  authService,
  assetService,
  logger,
  backendConfig,
  apiRoutes
};

// This object can be used to check if the backend is properly initialized
export const backend = {
  name: 'AssetFlow Backend',
  version: backendConfig.version,
  initialized: true,
  timestamp: new Date().toISOString()
};

// Log that the backend module has been loaded
logger.info('Backend module loaded successfully');
