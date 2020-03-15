import { Controller } from '@nestjs/common';

import { familyRoutes } from '@family-dashboard/app-api-routes';

@Controller(familyRoutes.name)
export class FamilyController {}
