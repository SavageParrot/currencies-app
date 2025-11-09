import { CountryData } from "@/types/currenciesTypes";

const useOptionsExtractor = (countries: CountryData[]) => {
  // Extraer continentes únicos de los resultados
  const continentOptions = Array.from(
    new Set(countries.map((c) => c.continent?.name).filter(Boolean))
  );

  // Extraer tipos de moneda únicos de los resultados
  const currencyOptions = Array.from(
    new Set(countries.map((c) => c.currency).filter(Boolean))
  );
  
  return {
    continentOptions,
    currencyOptions,
  };
};

export default useOptionsExtractor;
