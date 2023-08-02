import dotenv from 'dotenv';

import { ENV } from '@/common/interfaces/env';

dotenv.config();

class ConfigService {
  getEnv(key: keyof ENV): string {
    if (!process.env[key]) {
      throw new Error(key + ' environment variable does not set');
    }
    return process.env[key]!;
  }

  get currentMode(): 'demo' {
    return this.getEnv('CURRENT_MODE') as 'demo';
  }

  get isProduction(): boolean {
    return this.getEnv('NODE_ENV') === 'production';
  }
  get isDevelopment(): boolean {
    return this.getEnv('NODE_ENV') === 'development';
  }
  get contextPath(): string {
    return this.getEnv('CONTEXT_PATH');
  }

  get portServer(): number {
    return Number.parseInt(this.getEnv('PORT'));
  }

  get hostServer(): string {
    return this.getEnv('HOST');
  }
  get JWTSecretKey(): string {
    return this.getEnv('JWT_SECRET_KEY');
  }
}

export default new ConfigService();
