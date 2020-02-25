import * as dotenv from 'dotenv';
import * as fs from 'fs';

export interface EnvData {
  // application
  APP_ENV: string;
  APP_DEBUG: boolean;
  // database
  DB_TYPE: 'postgres';
  DB_HOST?: string;
  DB_NAME: string;
  DB_PORT?: number;
  DB_USER: string;
  DB_PASSWORD: string;
}

export class EnvService {
  private envData: EnvData;

  constructor() {
    const environment = process.env.NODE_ENV || 'development';
    const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));

    data.APP_ENV = environment;
    data.APP_DEBUG = data.APP_DEBUG === 'true' ? true : false;
    data.DB_PORT = parseInt(data.DB_PORT, 0);

    this.envData = data as EnvData;
  }

  public read(): EnvData {
    return this.envData;
  }

  public get<T>(key: string) {
    return this.read()[key] as T;
  }

  public isDev(): boolean {
    return this.envData.APP_ENV === 'development';
  }

  public isProd(): boolean {
    return this.envData.APP_ENV === 'production';
  }

  public isTest(): boolean {
    return this.envData.APP_ENV === 'test';
  }
}
