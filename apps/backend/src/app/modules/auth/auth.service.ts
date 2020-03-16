import { Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/services/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  public async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getByEmail(email);

    if (!user || !user.isVerified) {
      return null;
    }

    const isMatch = await compare(pass, user.password);

    if (isMatch) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  public async login(user: any) {
    const payload = { email: user.email, id: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
