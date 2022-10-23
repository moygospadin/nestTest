import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden exception, smth went wrong', HttpStatus.FORBIDDEN);
  }
}
