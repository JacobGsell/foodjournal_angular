import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-vis',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.css']
})
export class VisComponent implements OnInit {

  intervals =
    ['Gesamt',
      'September 2018',
      'Oktober 2018',
      'November 2018',
      'Dezember 2018',
      'Januar 2019']

  background = 'primary'

  showInterval(interval): void {
    console.log(interval)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
