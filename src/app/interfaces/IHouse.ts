import {ICategoryHome} from "./ICategoryHome";
import {IFeature} from "./IFeature";
import {IImage} from "./IImage";
import {IUser} from "./IUser";

export class IHouse {
  id?: number;
  nameHouse?: string;
  address?: string;
  bedroomNum?: number;
  bathroomNum?: number;
  description?: string;
  priceOneDay?: number;
  status?: string;
  categoryHome?: ICategoryHome;
  host?: IUser;
  features?: IFeature[];
  images?: IImage[];
}
