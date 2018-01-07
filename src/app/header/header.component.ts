import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  companies = [
    { value: 'bac', viewValue: 'Bank of America (BAC)' },
    { value: 'jpm', viewValue: 'JP Morgan Chase (JPM)' }
  ];

  comparisons = [
    { value: 'performance', viewValue: 'Performance' },
    { value: 'profit', viewValue: 'Profit' },
    { value: 'income', viewValue: 'Income' }
  ];

  quarters = [
    { value: '2015Q1', viewValue: '2015Q1' },
    { value: '2015Q2', viewValue: '2015Q2' },
    { value: '2015Q3', viewValue: '2015Q3' },
    { value: '2015Q4', viewValue: '2015Q4' },
    { value: '2016Q1', viewValue: '2016Q1' },
    { value: '2016Q2', viewValue: '2016Q2' },
    { value: '2016Q3', viewValue: '2016Q3' },
    { value: '2016Q4', viewValue: '2016Q4' },
    { value: '2017Q1', viewValue: '2017Q1' },
    { value: '2017Q2', viewValue: '2017Q2' },
    { value: '2017Q3', viewValue: '2017Q3' },
    { value: '2017Q4', viewValue: '2017Q4' }
  ];

  constructor() {}

  ngOnInit() {}
}
