import { Controller, Get, Res, HttpStatus, Body } from '@nestjs/common';
import { Response } from 'express';
import { getRepository } from 'typeorm';

import { User as UserEntity } from './entities';

@Controller()
export class AppController {
  @Get()
  async getData(@Body() body: Body, @Res() res: Response) {
    const userRepo = getRepository(UserEntity);

    const newUser = new UserEntity();

    const createdUser = await userRepo.save({
      ...newUser,
      email: 'test-2',
    });

    return res.status(HttpStatus.OK).json({
      msg: 'Test endpoint',
      createdUser,
    });
  }
}
