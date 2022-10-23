import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Req,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';
import { RolesGuard } from 'src/guards/auth.guard';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('white')
@UseGuards(RolesGuard)
// @UseInterceptors(LoggingInterceptor)
@UseFilters(new HttpExceptionFilter())
export class WhiteCatsController {
  @Get('cats')
  findAll(): string {
    return 'This action returns all whitecats';
  }

  @Get('/cats/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return `This action returns ${id} whitecats`;
  }

  @Get('')
  find(@Req() request: Request): string {
    console.log('request', request);

    return 'This action returns all cats';
  }
}
