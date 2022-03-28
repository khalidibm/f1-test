import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  IDataSet,
  ITableSchema,
} from 'src/app/shared/interfaces/table-dataset.interface';
import { environment } from 'src/environments/environment';

/**
 * Single multiple proposes Table component
 * With pagination and dynamic populate / render its layout with schema which is retrieving as an input parameter
 * And map data with relative column
 * In case of biding data into correct column it's require to have matched field between schema and data
 *
 * TODO :
 * In order to there is possibility to retrieve schema which is not following our expected ordering
 * It's good to have ordering (refer to order property in ITableSchema) before rendering in template
 */
@Component({
  selector: 'champ-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
  @Input() SpecialField: string = '';
  @Input() DisplayPagination: boolean = true;
  /**
   * The Dataset is an input which is the result of REST API call
   * It is retrieving as an Observable object
   * In order to avoid multiple subscription on template ( due to having separate scopes of data into one Observable object and using on different block )
   * It is required to subscribe in advanced and hand over to local variables */
  /** */
  private _dataset!: IDataSet;
  @Input()
  public set DataSet(v: IDataSet) {
    this._dataset = v;
    v.data$?.subscribe((d) => {
      this.data = d.data;
      this.total = d.total;
      this.offset = d.offset * d.limit;
      this.limit = d.limit;

      //In case of forcing angular change detector to detect changes and re-render partial DOM it needs to call detect changes on change detector reference
      this.changeDetectorRef.detectChanges();
    });
  }

  public get DataSet(): IDataSet {
    return this._dataset;
  }

  /**
   * To control pagination changes we need to handle local states and hand over changes to the parent component
   * Require changes are offset and limit
   * In our case limit is not implemented and using default values which is placed into environment config file
   */
  @Output() PageChange = new EventEmitter<{ offset: number; limit: number }>();

  /**
   * In case of handling hyper link click action, table needs to capture the column and related row which user click on it and hand over event to parent component
   */
  @Output() HyperLinkClicked = new EventEmitter<{
    column: ITableSchema;
    rowIndex: number;
  }>();
  ///#region Local variables ==>

  data: Array<any> = [];
  total: number = 0;
  offset: number = 1;
  limit: number = environment.page_limit;
  current_page: number = 1;

  ///#endregion Local variables <==

  /**
   * This function is binding to Hyperlink columns and fire related event in case of handing over values to the parent component
   * @param value
   * @returns
   */
  onHyperLinkClicked = (value: {
    value: string;
    rowIndex: number;
    column: ITableSchema;
  }) => this.HyperLinkClicked.emit({ ...value });
  
}
