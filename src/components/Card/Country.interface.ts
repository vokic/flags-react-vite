import { Result } from "../Result.interface";

export interface Country extends Result {
  name: {
    common: string;
    official: string;
  };
  coatOfArms?: {
    svg: string;
  };
  subregion: string;
  region: string;
  area: number;
  population: number;
  capital: string[];
  capitalInfo: {
    latlng: number[];
  };
  languages: {
    [key: string]: string;
  };
  demonyms: {
    eng: {
      m: string;
    };
  };
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  status: string;
  flags: {
    svg: string;
  };
  car: {
    side: string;
    signs: string[];
  };
  timezones: string[];
  fifa: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
}

export default Country;
