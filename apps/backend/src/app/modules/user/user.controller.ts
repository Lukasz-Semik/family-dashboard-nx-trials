import {
  Controller,
  Body,
  Post,
  Res,
  HttpStatus,
  UsePipes,
  Patch,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Response } from 'express';
import { UserSignUpPostOptions, UserConfirmPatchOptions } from '@family-dashboard/app-types';
import { userRoutes } from '@family-dashboard/app-api-routes';

import { LocalAuthGuard } from '@app-be/modules/auth/guards/local-auth.guard';

import { CreateUserPipe } from './pipes/create-user/create-user.pipe';
import { ConfirmUserValidatorPipe } from './pipes/confirm-user/confirm-user.pipe';
import { RegistratorService } from './services/registrator.service';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './services/user.service';

@Controller(userRoutes.name)
export class UserController {
  public constructor(
    private registratorService: RegistratorService,
    private authService: AuthService,
    private userService: UserService
  ) {}

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

  @Patch(userRoutes.confirm.name)
  @UsePipes(ConfirmUserValidatorPipe)
  public async confirmUser(
    @Body() body: UserConfirmPatchOptions,
    @Res() res: Response
  ): Promise<Response> {
    const user = await this.registratorService.confirmUser(body);

    return res.status(HttpStatus.OK).json({
      msg: 'User has been successfully confirmed',
      data: {
        user,
      },
    });
  }

  @UseGuards(LocalAuthGuard)
  @Post(userRoutes.signIn.name)
  async signIn(@Req() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(userRoutes.me.name)
  async getProfile(@Req() req, @Res() res) {
    const user = await this.userService.getUserSerializedByEmail(req.user.email);

    return res.status(HttpStatus.OK).json({
      msg: 'User is signed in',
      data: {
        user,
      },
    });
  }
}
