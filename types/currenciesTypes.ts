export interface CountryData {
  code: string;
  name: string;
  continent: { name: string };
  languages: { name: string }[];
  currency: string;
  capital: string;
  emojiU: string;
}

export interface GetCountriesData {
  countries: CountryData[];
}