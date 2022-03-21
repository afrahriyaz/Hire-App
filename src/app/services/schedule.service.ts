import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  url = "https://mocki.io/v1/a9cdaccf-5c03-40e6-823d-4a5355114ed1";
  constructor(private http:HttpClient) { }
  schedule()
  {
    return this.http.get(this.url);
  }
}
