import { IConfig } from '@/core/types';

export function config(): IConfig {
  const testing = process.env.NODE_ENV !== 'production';
  return {
    id: process.env.APP_ID,
    url: process.env.URL,
    port: parseInt(process.env.PORT, 10) || 3000,
    domain: process.env.DOMAIN,
    postgres_url: process.env.POSTGRES_URL,
    testing,
  };
}

export function configFilePath(): string {
  let envFilePath = `${process.cwd()}/.env`;
  const ENV = process.env.NODE_ENV;
  if (ENV == 'development') {
    envFilePath = `${process.cwd()}/config/development.env`;
  } else if (ENV == 'production') {
    envFilePath = `${process.cwd()}/config/production.env`;
  } else if (ENV == 'test') {
    envFilePath = `${process.cwd()}/config/test.env`;
  }
  return envFilePath;
}
