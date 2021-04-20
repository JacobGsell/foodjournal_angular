import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartColor } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from '../data.service'


@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.dataService.getExpensesbyNoon();
  }

  public barChartLabels: Label[] = [...Array(24).keys()].map(d => d + ':00');

  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { xAxes: [{}], yAxes: [{}] },
  };

  public barChartColors: any[] = [
    {
      backgroundColor: [
        '#1d2d45',
        '#1d2d45',
        '#1d2d45',
        '#1d2d45',
        '#1d2d45',
        '#1d2d45',
        '#1d2d45',
        '#1d2d45',
        '#1d2d45',
        '#1d2d45',
        '#1d2d45',
        '#1d2d45',
        '#ff9800',
        '#ff9800',
        '#ff9800',
        '#ff9800',
        '#ff9800',
        '#ff9800',
        '#ff9800',
        '#ff9800',
        '#ff9800',
        '#ff9800',
        '#ff9800',
        '#ff9800'
      ]
    }];

  public barChartData: ChartDataSets[] = [
    {data: this.dataService.getExpensesbyNoon(), label: 'Ausgaben'}
  ];



}
