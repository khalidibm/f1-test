import { ConstructorState } from './shared/interfaces/constructor-state.interface';
import { DriverStandingState } from './shared/interfaces/driver-standing-state.interface';
import { DriverState } from './shared/interfaces/driver-state.interface';
import { RaceState } from './shared/interfaces/race-state.interface';

export interface AppState {
  Race: RaceState;
  Driver: DriverState;
  Constructor: ConstructorState;
  DriverStanding: DriverStandingState;
}
