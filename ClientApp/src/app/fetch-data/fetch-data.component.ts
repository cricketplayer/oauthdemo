import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    const headers1 = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6InhVSWxIczJtWGhQeUtaLXpvWHNXSUEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE1ODA2NDM5NTksImV4cCI6MTU4MDY0NzU1OSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiYXBpMiIsImNsaWVudF9pZCI6ImNsaWVudCIsInNjb3BlIjpbImFwaTIiXX0.sgiRckbkPVE1TIu92uHVtpk8xlHQ_EyUYs0Pz36eTPxwDqlvI6ICKFIBIRnsuyyGl9EF737MMtV6FklpHe0hmaoc5ojbM22vAWw5uzlfQG9EwbnMvOLNnl1ouQYQLHbOhUfZsE6cFuVPrr9gntIrO4VKauX_dJXfyL-0PKUI8DiSAYaWq6bazFyPKE2tUWBjGTVPBgBrlky6OzXC8bpr3Se25AFRL4gdyh2o_Q18cHuokRWymwVQ9Ga1HhdF3tl09q5HXdmX2_IJJCV5pohFkAYf2_xM0K05mfjHMu3FAb4i2P1CD8bmfa6DUl8nEr7a23bKUSSkiY4uAyMZWEISxg' });
    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts', { headers: headers1 }).subscribe(result => {
     // http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
