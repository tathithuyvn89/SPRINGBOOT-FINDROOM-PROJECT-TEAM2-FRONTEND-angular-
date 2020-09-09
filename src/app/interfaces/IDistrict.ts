import {IProvince} from "./IProvince";

export interface IDistrict {
  id?: number;
  districtName?: string;
  province?: IProvince;
}
