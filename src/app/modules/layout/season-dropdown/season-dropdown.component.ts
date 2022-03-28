import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * Single component to calculate years range and display in drop down component
 * User might need to search / filter data
 * When user select a year it will emit the selection
 */
@Component({
  selector: 'champ-season-drop-down',
  templateUrl: './season-dropdown.component.html',
  styleUrls: ['./season-dropdown.component.scss'],
})
export class SeasonDropDownComponent {
  /**
   * Output object to return selected value to parent component
   */
  @Output('Selected_Year') _Selected_Year = new EventEmitter<number>();

  filter: string = '';
  selected_year: number = this.beginning_year;
  /**
   * Send Selected_Year value to parent component via event emitter object
   * @param selected_year : number
   */
  onSelectSeason = (selected_year: number) => {
    this.selected_year = selected_year;
    this._Selected_Year.emit(selected_year);
  };

  /**
   * In order to the application does not required to display all years from beginning, it will filter out from 2005
   * The beginning year is configurable from environment in case that we need different value on different environment
   * Or in case that we need to initial or change the value via pipeline
   */
  public get beginning_year(): number {
    return environment.beginning_year;
  }

  /**
   * In order to current year will be change every year and to avoid adding static value
   * this property is suppose to find the current year using standard Date object
   */
  public get current_year(): number {
    const current_date = new Date(Date.now());
    return current_date.getFullYear();
  }

  /**
   * This property is suppose to calculate a range of years from beginning until current year
   */
  public get date_range(): Array<number> {
    let range: Array<number> = [];
    for (let year = this.beginning_year; year <= this.current_year; year++) {
      range.push(year);
    }
    return range;
  }
}
