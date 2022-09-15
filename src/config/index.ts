import configFile from './config.json';
import { Env } from '../index';

interface Config {
  BASE_URL: string;
}

let config: Config;

export const setConfig = (env: Env) => {
  config = configFile[env] as Config;
};

export const getConfig = () => {
  return config;
};
