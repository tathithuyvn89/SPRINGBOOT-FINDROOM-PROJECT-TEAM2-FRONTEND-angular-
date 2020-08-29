import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IHouse} from '../interfaces/IHouse';
import {Observable} from 'rxjs';

const HOUSE_API = 'http://localhost:8080/api/v1/houses';

@Injectable({providedIn: 'root'})
export class HouseService {

constructor(private http: HttpClient) {}

public createNewHouse(house: IHouse): Observable<any> {
  return this.http.post(HOUSE_API, house);
}
}
