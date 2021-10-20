import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-year-selector',
  templateUrl: './year-selector.component.html',
  styleUrls: ['./year-selector.component.css']
})
export class YearSelectorComponent implements OnInit {

  constructor(private router: Router) { }

  @Input()
  teamName;

  allYears: any[] = [];

  ngOnInit(): void {
    for (let year = environment.startYear; year <= environment.endYear; year++) {
      this.allYears.push(year);
    }
  }
}
