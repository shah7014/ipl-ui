import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input()
  wins;

  @Input()
  totalMatches;

  data = null;
  colorScheme = {
    domain: ['#4da375', '#a34d5d']
  };
  view: any[] = [300, 300];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.data = [{name: 'wins', value: this.wins}, {name: 'loses', value: this.totalMatches - this.wins}];
  }

}
