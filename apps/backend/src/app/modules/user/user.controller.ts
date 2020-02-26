import { Controller, Body, Post, Res, HttpStatus, UsePipes, Patch } from '@nestjs/common';
import { Response } from 'express';
import { UserSignUpPostOptions } from '@family-dashboard/app-types';

import { UserCreatorService } from './services/user-creator.service';

@Controller('user')
export class UserController {
  public constructor(private userCreatorService: UserCreatorService) {}

  @Post('/sign-up')
  public async createUser(
    @Body() body: UserSignUpPostOptions,
    @Res() res: Response
  ): Promise<Response> {
    const user = await this.userCreatorService.createUser(body);

    return res.status(HttpStatus.CREATED).json({
      msg: 'User has been successfully created',
      data: {
        user,
      },
    });
  }
}
