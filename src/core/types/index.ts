export interface IConfig {
  readonly id: string;
  readonly url: string;
  readonly port: number;
  readonly domain: string;
  readonly postgres_url: string;
  readonly testing: boolean;
}
