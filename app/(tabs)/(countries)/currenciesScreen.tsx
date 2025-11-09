import React, { useState } from "react";
// UI elements
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Icon, Input } from "react-native-elements";
// Components
import CountryCard from "@/components/CountryCard";
import FilterPicker from "@/components/FilterPicker";
import SkeletonCountryCard from "@/components/SkeletonCountryCard";
// GraphQL
import { GET_COUNTRIES_BY_NAME } from "@/graphQL/countriesQuery";
import { useQuery } from "@apollo/client/react";
// Hooks & utilities
import useDebouncedValue from "@/hooks/useDebouncedValue";
import useOptionsExtractor from "@/hooks/useOptionsExtractor";
import { GetCountriesData } from "@/types/currenciesTypes";
import { toCaseInsensitiveRegex } from "@/utils/functions";

const CountriesCurrencies = () => {
  const [searchName, setSearchName] = useState("");
  const [searchContinent, setSearchContinent] = useState("");
  const [searchCurrency, setSearchCurrency] = useState("");

  const debouncedSearch = useDebouncedValue(searchName, 1000);

  const { data, loading, error } = useQuery<GetCountriesData>(
    GET_COUNTRIES_BY_NAME,
    {
      fetchPolicy: "cache-and-network",
      variables: debouncedSearch
        ? { term: toCaseInsensitiveRegex(debouncedSearch) }
        : undefined,
      skip: !debouncedSearch,
    }
  );

  const countries = data?.countries || [];

  const { continentOptions, currencyOptions } = useOptionsExtractor(countries);

  // Filtrar países según continente y moneda seleccionados
  const filteredCountries = countries.filter((country) => {
    const matchContinent = searchContinent
      ? country.continent?.name === searchContinent
      : true;
    const matchCurrency = searchCurrency
      ? country.currency === searchCurrency
      : true;
    return matchContinent && matchCurrency;
  });

  return (
    <View style={styles.container}>
      {/* <View style={styles.inputContainer}></View> */}
      <Input
        placeholder="Buscar país"
        leftIcon={
          <Icon name="search" type="feather" color="#3a7fe6" size={22} />
        }
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        onChangeText={setSearchName}
        value={searchName}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <View style={styles.hstack}>
        <FilterPicker
          label="Continente"
          value={searchContinent}
          options={continentOptions}
          onChange={setSearchContinent}
          style={styles.filterContainer}
          pickerStyle={styles.picker}
          disabled={continentOptions.length === 0}
        />
        <FilterPicker
          label="Moneda"
          value={searchCurrency}
          options={currencyOptions}
          onChange={setSearchCurrency}
          style={styles.filterContainer}
          pickerStyle={styles.picker}
          disabled={currencyOptions.length === 0}
        />
      </View>
      {error ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
          <Text style={{ color: "#d32f2f", fontWeight: "bold", marginBottom: 8 }}>
            Ocurrió un error al cargar los países
          </Text>
          <Text style={{ color: "#d32f2f" }}>{error.message}</Text>
        </View>
      ) : loading ? (
        <View style={{ width: "100%", paddingHorizontal: 8 }}>
          {[...Array(6)].map((_, idx) => (
            <SkeletonCountryCard key={idx} />
          ))}
        </View>
      ) : filteredCountries.length === 0 ? (
        <View
          style={{
            flex: 1,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>No hay resultados</Text>
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={filteredCountries}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => <CountryCard countryData={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor: "#030d1fff",
    flex: 1,
  },
  inputContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#b0c4de",
    backgroundColor: "#f4f8fc",
    paddingHorizontal: 10,
    margin: 12,
  },
  inputText: {
    color: "#222",
    fontSize: 16,
    paddingLeft: 4,
  },
  list: {
    width: "100%",
    paddingHorizontal: 12,
  },
  filterContainer: {
    flex: 1,
    marginHorizontal: 6,
  },
  filterLabel: {
    color: "#3a7fe6",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 2,
    marginLeft: 8,
  },
  picker: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#3a7fe6",
    backgroundColor: "#f4f8fc",
    color: "#14213d",
    borderRadius: 10,
    marginVertical: 4,
    fontSize: 16,
    paddingLeft: 8,
  },
  hstack: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 8,
    // backgroundColor: '#071a36ff'
  },
});

export default CountriesCurrencies;
