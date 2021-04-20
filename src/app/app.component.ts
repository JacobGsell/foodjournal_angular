import { Component } from '@angular/core';
import { FOOD } from './mock-food';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'food-journal';
  shit = FOOD;

  MONTHS: string[] = [];

  constructor() { }

  groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  ngOnInit(): void {
    this.MONTHS['01'] = 'Januar';
    this.MONTHS['10'] = 'Oktober';
    this.MONTHS['11'] = 'November';
    this.MONTHS['12'] = 'Dezember';

    // let tmp = this.shit;

    // // tmp.map(d => d.Date = d.Date.split('-')[1])

    // let byMonth: any[] = this.groupBy(tmp, 'Date')

    // let january = byMonth['01'];

    // let PriceByMonth: number[] = [];

    // for (const iterator of Object.keys(byMonth)) {
    //   const element = byMonth[iterator];
    //   // console.log(iterator, element)
    //   let sum = Math.round(element.map(d => d.Price).reduce((a, c) => a + c) * 100) / 100;

    //   PriceByMonth[this.MONTHS[iterator]] = sum
    // }

    // console.log(PriceByMonth)

    // console.log("jan", january)
    // january.forEach((d, i) => {
    //   januarySum += d.Price;
    // })
    
    // januarySum = Math.round(januarySum*100)/100;
    // console.log("january", januarySum)
  }
}
