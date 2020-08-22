import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ICategoryHome} from "../interfaces/ICategoryHome";
import {Observable} from "rxjs";
const CATEGORY_API='http://localhost:8080/api/v1/categoryhomes';
@Injectable({providedIn: 'root'})
export class CategoryHomeService {
constructor(private http: HttpClient) {
}
public createCategoryHome(category: ICategoryHome): Observable<any> {
  return this.http.post(CATEGORY_API, category);
}
}
