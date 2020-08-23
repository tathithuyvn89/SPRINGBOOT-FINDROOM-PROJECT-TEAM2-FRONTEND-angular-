import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IFeature} from "../interfaces/IFeature";
import {Observable} from "rxjs";

const FEATURE_API= 'http://localhost:8080/api/v1/featurehomes'
@Injectable({providedIn: 'root'})
export class FeatureHomeService {
  constructor(private http: HttpClient) {}

  public createNewFeature(feature: IFeature):Observable<any> {
    return this.http.post(FEATURE_API, feature);
  }
  public listFeatures(): Observable<IFeature[]> {
    return this.http.get<IFeature[]>(FEATURE_API);
  }

}
