import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NextyceApiService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
     return this.http.get(environment.apiUrl + '/WeatherForecast');
  }
}
