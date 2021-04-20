import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test-dashboard',
  templateUrl: './test-dashboard.component.html',
  styleUrls: ['./test-dashboard.component.css']
})
export class TestDashboardComponent implements OnInit {
  title = 'app';

  OVERVIEW = [
    { style: 'col-lg-4 col-sm-6', title: 'Lebensmittel', value: this.dataService.getFoodCount(), list: false },
    { style: 'col-lg-4 col-sm-6', title: 'Einträge', value: this.dataService.getEntryCount(), list: false },
    { style: 'col-lg-4 col-sm-6', title: 'Ausgaben Gesamt', value: this.dataService.getPriceSum(), currency: true },
    { style: 'col-lg-4 col-sm-6', title: 'Tage', value: this.dataService.getDayCount() },
    { style: 'col-lg-4 col-sm-6', title: 'Wochen', value: this.dataService.getWeekCount() },
    { style: 'col-lg-4 col-sm-6', title: 'Monate', value: this.dataService.getMonthCount() },
  ]

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {

      return [
        { title: 'Top 10 Lebensmittel', cols: 2, rows: 1, type: 'bar' },
        { title: 'Ausgaben über Zeit', cols: 2, rows: 1 },
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
