import { CountryInfo } from '../../../api/apiService';

export const limitCountryItems = (countriesArray: CountryInfo[], limit: number) =>
  limit <= 0 || limit >= countriesArray.length ? countriesArray : countriesArray.slice(0, limit);
