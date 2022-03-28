import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { SeasonDropDownComponent } from './season-dropdown/season-dropdown.component';

@NgModule({
  declarations: [NavbarComponent, SeasonDropDownComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule,
  ],
  exports: [NavbarComponent, SeasonDropDownComponent],
})
export class LayoutModule {}
