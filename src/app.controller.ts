import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test/:id')
  getDataById(@Param() id: number): string {
    console.log(id);
    
    return  `id return ${id['id']}`;
  }
}
