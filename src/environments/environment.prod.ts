import { CONFIG } from './config';

export const environment = {
  production: true,
  mingleApiUrl: CONFIG.mingleApiUrl,
  laneNames: CONFIG.laneNames,
  mql: CONFIG.mql,
  cardProperties: CONFIG.cardProperties
};
