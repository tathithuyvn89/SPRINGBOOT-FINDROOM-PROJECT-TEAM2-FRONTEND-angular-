import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProvince} from "../interfaces/IProvince";
import {IDistrict} from "../interfaces/IDistrict";

const PROVINCE_API = environment.baseUrl+'provinces'
const DISTRICT_API = environment.baseUrl + 'districts'
@Injectable({providedIn: 'root'})
export class ProvinceService {
  constructor(
    private http: HttpClient) {}

    public showAllProvinces(): Observable<IProvince[]> {
    return this.http.get<IProvince[]>(PROVINCE_API);
    }
    public getAllDistricts() : Observable<IDistrict[]> {
    return this.http.get<IDistrict[]>(DISTRICT_API);
    }

}
