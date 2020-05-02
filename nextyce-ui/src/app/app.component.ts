import { Component, OnInit } from '@angular/core';
import { NextyceApiService } from './nextyce-api.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apiService: NextyceApiService) {}

  weatherReports: Observable<Array<any>>;

  ngOnInit() {
    this.weatherReports = this.apiService.getWeather();
  }
}


