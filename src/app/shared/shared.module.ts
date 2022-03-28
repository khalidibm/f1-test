import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { DriverStandingComponent } from './components/driver-standing/driver-standing.component';
@NgModule({
  declarations: [TableComponent, DriverStandingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    DriverStandingComponent
  ],
})
export class SharedModule {}
