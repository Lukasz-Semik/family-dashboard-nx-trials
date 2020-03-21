import { Injectable } from '@angular/core';
import { FamilyData } from '@family-dashboard/app-types';
import { FamilyApiService } from '@app-fe/api/family';

@Injectable({ providedIn: 'root' })
export class FamilyService {
  public family: FamilyData;

  constructor(private familyApiService: FamilyApiService) {}

  public async setFamily(familyId: string) {
    try {
      const response = await this.familyApiService.getItem(familyId);
      this.family = response.data.family;
    } catch (err) {
      // TODO: add notification
      console.log(err);
    }
  }
}
