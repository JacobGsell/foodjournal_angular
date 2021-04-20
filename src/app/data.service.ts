import { Injectable, OnInit } from '@angular/core';
import { FOOD } from './mock-food';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {


  data = FOOD

  month = ['Jan', 'Sep', 'Okt', 'Nov', 'Dez'];

  showFood(): void {
  }

  // Works
  getPriceSum = (): number => {

    let sum = this.data.map(d => d.Price).reduce((a, v) => a + v);
    console.log("false sum", sum)
    let roundedSum = Math.round(sum * 100) / 100;

    return roundedSum;
  }

  // Works
  groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  getMonthName = (key: number): string => this.month[key];

  // Works
  twoDecimals = (value: number): number => Math.floor(value * 100) / 100

  // Works
  getMonthCount = (): number => [...new Set(this.data.map(d => d.Date.split('-')[1]))].length

  // Works
  getDayCount = (): number => [...new Set(this.data.map(d => d.Date))].length

  // Works
  getWeekCount = (): number => Math.floor(this.getDayCount() / 7);

  // Works
  getFoodCount = () => this.getFoods().length

  // Works
  getFoods = (): string[] => [...new Set(this.data.map(d => d.Name))].sort()

  // Works
  getEntryCount = (): number => this.data.length;

  // Works ??
  getExpensesbyNoon = (): number[] => {

    let reducedTimeData = this.data.map(d => {
      d.Zeit = d.Zeit.split(':')[0];
      return d;
    });

    let dataByHour = this.groupBy(reducedTimeData, 'Zeit');

    let unreducedResult: number[] = []

    for (const iterator of Object.keys(dataByHour)) {
      const element = dataByHour[iterator];

      let iteratorString = "" + iterator

      if (iteratorString.length == 2) {
        iteratorString = iteratorString[0] == '0' ? iteratorString[1] : iteratorString;
      }

      unreducedResult[parseInt(iteratorString)] = this.twoDecimals(element.map(d => d.Price).reduce((a, v) => a + v))
    }

    return unreducedResult;
  }

  getExpensesbyMonth = (): number[] => {
    console.log("data untouched", this.data)

    let myData = JSON.parse(JSON.stringify(this.data))

    // let myData = [...this.data]

    let reducedMonthData = myData.map(d => {
      let myMonth = d.Date.split('-')[1];

      myMonth = (myMonth.length == 2 && myMonth[0] == '0') ? myMonth[1] : myMonth

      d.Date = myMonth

      return d;
    })

    let dataByMonth = this.groupBy(reducedMonthData, 'Date');

    console.log("hier ist arsch", dataByMonth)

    let unreducedResult = [];

    for (const iterator of Object.keys(dataByMonth)) {
      const element = dataByMonth[iterator];

      unreducedResult[iterator] = this.twoDecimals(element.map(d => d.Price).reduce((a, v) => a + v))
    }

    let filteredValues = unreducedResult.filter(d => d !== undefined)
    let monthKeys = Object.keys(unreducedResult).filter(d => d !== undefined)

    // let data = unreducedResult.filter(d => d !== undefined)
    monthKeys = monthKeys.filter(d => d !== undefined)
    let result = [];

    monthKeys = monthKeys.map((d, i) => {
      return this.month[+i];
    })

    console.log("keys", monthKeys)
    console.log("data", filteredValues)

    result.push(monthKeys)
    result.push(filteredValues)

    console.log("result", result)
    return result;


  }

  constructor() { }

  ngOnInit(): void {
  }
}
