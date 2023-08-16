import { Injectable } from '@nestjs/common';

import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class AppService {
  constructor(@InjectRedis() private readonly client: Redis) {}

  async createData() {
    await this.client.set('cat', '야옹야옹', 'EX', 10000);
  }

  async readData(): Promise<string> {
    const result = await this.client.get('cat');
    console.log(result);
    return result;
  }

  async updateData() {
    await this.client.del(['cat']);
    await this.client.set('cat', '야옹야옹꺄옹', 'EX', 10000);
  }

  async deleteData() {
    await this.client.del(['cat']);
  }
}
