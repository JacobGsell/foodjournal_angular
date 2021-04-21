import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartColor, ChartData } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vis-content',
  templateUrl: './vis-content.component.html',
  styleUrls: ['./vis-content.component.css']
})
export class VisContentComponent implements OnInit {
  ebm = this.dataService.getExpensesbyMonth();

  topTenOptions: ChartOptions = {
    responsive: true,
  };
  topTenLabels: Label[] = ['Mineralwasser', 'Milch', 'Joghurt', 'Breze', 'Brot', 'Döner', 'Banane', 'Club Mate', 'Spaghetti', 'instantnudeln'];
  topTenPriceLabels: Label[] = ['Afrikanisch', 'All you can eat(Asiatisch)', 'Burger', 'Burger', 'Kino', 'Burger', 'Burger King', 'Pizza', 'Asiatisch', 'Currywurst mit Pommes']

  topTenData: ChartDataSets[] = [
    { data: [117, 25, 25, 20, 19, 19, 18, 18, 12, 11], label: 'Anzahl Käufe' },
  ];
  topTenPriceData: ChartDataSets[] = [
    { data: [27.50, 18.90, 18.40, 12.90, 12.30, 10.90, 9.78, 7.00, 6.00, 6.00], label: 'Kosten in €' },
  ];
  topTenType: ChartType = 'bar'

  lineLabels: Label[] = ['September', 'Oktober', 'November', 'Dezember', 'Januar']

  lineData: ChartDataSets[] = [
    { data: [10, 20, 30, 15, 88], label: 'Ausgaben' },
    { data: [30, 50, 40, 100, 12], label: 'Menge' },

  ]

  lineType: ChartType = 'line'

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          // id: 'y-axis-1',
          // position: 'right',
          // gridLines: {
          //   // color: 'rgba(0,0,0,0.3)',
          // },
          // ticks: {
          //   // fontColor: 'red',
          // }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  // public pieChartLabels = ['September', 'Oktober', 'November', 'Dezember', 'Januar'];
  // public pieChartData = [100, 150, 200, 75, 30];
  // public pieChartType = 'pie';

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = ['Sep', 'Okt', 'Nov', 'Dez', 'Jan'];

  public pieChartData: number[] = [100, 150, 200, 75, 30]

  public pieChartType: ChartType = 'pie';

  public pieChartConfigs: any[] = [
    {
      legend: true,
      style: "col-lg-4 col-12 mb-3 mb-lg-0",
      title: 'Monat',
      options: {
        responsive: true
      },
      label: this.ebm[0],
      data: this.ebm[1],
      type: 'pie'
    },
    {
      legend: true,
      style: "col-lg-4 col-12 mb-3 mb-lg-0",
      title: 'Tageszeit',
      options: {
        responsive: true
      },
      label: ['Vormittags', 'Nachmittags'],
      data: [100, 343],
      type: 'pie'
    },
    {
      legend: false,
      style: "col-lg-4 col-12",
      title: 'Wochentag',
      options: {
        responsive: true
      },
      label: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
      data: [100, 150, 200, 75, 300, 200, 50],
      type: 'bar'
    },
  ]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log("ebm", this.ebm)
  }

}
