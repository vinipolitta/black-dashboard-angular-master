import { Restaurant } from './../shared/interfaces/restaurant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  api = environment.apiURL;

  constructor(private http: HttpClient) { }


  getRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.api +'/restaurants').pipe(take(1))
  }
}
