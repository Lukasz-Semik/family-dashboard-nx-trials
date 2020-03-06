import { Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/services/user.service';
//  private jwtService: JwtService

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {

  }

  public async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(email);
    
    if (!user) {
      return null;
    }

    const isMatch = await compare(pass, user?.password);

    if (isMatch) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  // public async login(user: any) {
  //   const payload = { email: user.email, sub: user.id };
  //   console.log(payload);
  //   // return {
  //   //   access_token: this.jwtService.sign(payload),
  //   // };
  // }
}