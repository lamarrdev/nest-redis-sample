import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/c')
  async createData(): Promise<string> {
    const result = await this.appService.createData();
    return 'CREATE';
  }

  @Get('/r')
  async readData(): Promise<string> {
    const result = await this.appService.readData();
    return result;
  }

  @Get('/u')
  async updateData(): Promise<string> {
    await this.appService.updateData();
    return 'UPDATE';
  }

  @Get('/d')
  async deleteData(): Promise<string> {
    await this.appService.deleteData();
    return 'DELETE';
  }
}
