import { Component, EventEmitter, Output } from '@angular/core';
/**
 * Single component for navigation bar
 * It's included two major parts
 * URL's navigation and year selection
 */
@Component({
  selector: 'champ-navbar',

  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() SeasonChanged = new EventEmitter<number>();

  onSelectSeason = (year: number) => this.SeasonChanged.emit(year);
}
