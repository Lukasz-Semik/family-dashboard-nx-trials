import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingsModule } from './landings/landings.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ShoppingListMdoule } from './shopping-list/shopping-list.module';
import { ElementsModule } from './elements/elements.module';
import { FamilyModule } from './family/family.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ElementsModule,
    AppRoutingModule,
    LandingsModule,
    DashboardModule,
    ShoppingListMdoule,
    FamilyModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
