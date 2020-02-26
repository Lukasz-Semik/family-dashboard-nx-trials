import { Controller, Body, Post, Res, HttpStatus, UsePipes, Patch } from '@nestjs/common';
import { Response } from 'express';
import { UserSignUpPostOptions } from '@family-dashboard/app-types';
import { userRoutes } from '@family-dashboard/app-api-routes';

import { CreateUserPipe } from './pipes/create-user/create-user.pipe';
import { RegistratorService } from './services/registrator.service';

@Controller(userRoutes.name)
export class UserController {
  public constructor(private registratorService: RegistratorService) {}

  @Post(userRoutes.signUp.name)
  @UsePipes(CreateUserPipe)
  public async createUser(
    @Body() body: UserSignUpPostOptions,
    @Res() res: Response
  ): Promise<Response> {
    const user = await this.registratorService.createUser(body);

    return res.status(HttpStatus.CREATED).json({
      msg: 'User has been successfully created',
      data: {
        user,
      },
    });
  }
}
