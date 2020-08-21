import {ICategoryHome} from "./ICategoryHome";
import {IHost} from "./IHost";
import {IFeature} from "./IFeature";
import {IImage} from "./IImage";

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
  host?: IHost;
  features?: IFeature[];
  images?: IImage[];
}
