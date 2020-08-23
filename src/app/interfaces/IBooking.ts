import {IUser} from "./IUser";
import {IHost} from "./IHost";

export class IBooking {
  id?: number;
  checkinDay?: Date;
  checkoutDay?: Date;
  vote?: number;
  feedback?: string;
  payment?: number;
  customer?: IUser;
  host?: IHost;
}
