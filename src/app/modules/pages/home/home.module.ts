import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../../layout/layout.module';
import { RaceApiService } from 'src/app/shared/services/race-api.service';

import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { raceReducer } from 'src/app/shared/reducers/race.reducers';
import { RaceEffects } from 'src/app/shared/effects/race.effects';
import { DriverEffects } from 'src/app/shared/effects/driver.effects';
import { driverReducer } from 'src/app/shared/reducers/driver.reducers';
import { constructorReducer } from 'src/app/shared/reducers/constructor.reducers';
import { ConstructorsEffects } from 'src/app/shared/effects/constructor.effects';
import {
  CONSTRUCTOR_STORE_KEY,
  DRIVER_STANDING_STORE_KEY,
  DRIVER_STORE_KEY,
  RACE_STORE_KEY,
} from 'src/app/shared/constants/keywords.const';
import { driverStandingReducer } from 'src/app/shared/reducers/driver-standing.reducers';
import { DriverStandingEffects } from 'src/app/shared/effects/driver-standing.effects';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SharedModule,
    StoreModule.forFeature(RACE_STORE_KEY, raceReducer),
    StoreModule.forFeature(DRIVER_STORE_KEY, driverReducer),
    StoreModule.forFeature(CONSTRUCTOR_STORE_KEY, constructorReducer),
    StoreModule.forFeature(DRIVER_STANDING_STORE_KEY, driverStandingReducer),
    EffectsModule.forFeature([
      RaceEffects,
      DriverEffects,
      ConstructorsEffects,
      DriverStandingEffects,
    ]),
  ],
  providers: [RaceApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
