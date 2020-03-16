import { Controller, UseGuards, Post, Req, Res, UsePipes, HttpStatus } from '@nestjs/common';

import { familyRoutes } from '@family-dashboard/app-api-routes';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateFamilyValidatorPipe } from './pipes/create-family/create-family.pipe';
import { FamilyService } from './services/family.service';

@Controller(familyRoutes.name)
export class FamilyController {
  constructor(private familyService: FamilyService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(CreateFamilyValidatorPipe)
  async create(@Req() req, @Res() res) {
    const family = await this.familyService.createItem(req.body, req.user.email);

    return res.status(HttpStatus.CREATED).json({
      msg: 'Family has been created',
      data: {
        family,
      },
    });
  }
}
