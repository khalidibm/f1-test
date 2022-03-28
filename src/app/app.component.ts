import { Component } from '@angular/core';
import { SeasonHelperService } from './shared/services/season-helper.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'World F1 Champion';

  constructor(
    private readonly seasonHelper: SeasonHelperService, 
    private spinner: NgxSpinnerService
    ) {}

  onSeasonChanged = (year: number) => this.seasonHelper.onLoad({ year });

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
}
}
