import {Injectable} from "@angular/core";

const KEY_TOKEN = '';
const KEY_ADDRESS= 'address_id';


@Injectable({providedIn: 'root'})
export class LocalStorageService {
  constructor() {
  }
  signOut() {
    window.localStorage.clear();
  }
  public saveAddressId(addressId: string){
  window.localStorage.removeItem(KEY_ADDRESS);
  window.localStorage.setItem(KEY_ADDRESS,addressId );
}
 public getAddressId(): string {
      return localStorage.getItem(KEY_ADDRESS);
 }

}
