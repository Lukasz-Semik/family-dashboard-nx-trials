import { NgModule } from '@angular/core';

import { ElementsModule } from '@app-fe/shared/elements/elements.module';

import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [ElementsModule],
  exports: [LandingPageComponent],
})
export class PagesModule {}
