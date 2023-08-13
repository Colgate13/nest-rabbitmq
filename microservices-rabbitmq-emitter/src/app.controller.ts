import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/sendCats')
  async sendCats() {
    return this.appService.sendCats();
  }
}
