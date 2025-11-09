import CountryDetailItem from "@/components/CountryDetailItem";
import { CountryData } from "@/types/currenciesTypes";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

const CountryDetails = () => {
  const { countryData } = useLocalSearchParams();
  const parsedData: CountryData = JSON.parse(countryData as string);

  // Convertir emojiU a bandera
  const emoji = useMemo(() => {
    if (!parsedData.emojiU) return "";
    const codePoints = parsedData.emojiU
      .split(" ")
      .map((cp) => parseInt(cp.replace("U+", ""), 16));
    return String.fromCodePoint(...codePoints);
  }, [parsedData.emojiU]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.flag}>{emoji}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{parsedData.name}</Text>
        <View style={styles.divider} />
        <CountryDetailItem title="Código" value={parsedData.code} />
        <CountryDetailItem title="Moneda" value={parsedData.currency} />
        <CountryDetailItem
          title="Continente"
          value={parsedData.continent?.name}
        />
        <CountryDetailItem
          title="Idiomas"
          value={parsedData.languages?.map((lang) => lang.name).join(", ")}
        />
        <CountryDetailItem title="Capital" value={parsedData.capital} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 10,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  flag: {
    fontSize: 80,
    textAlign: "center",
    marginBottom: 8,
  },
  card: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: "#e0ecff",
    borderColor: "#b0c4de",
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#14213d",
    textAlign: "center",
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#b0c4de",
    marginVertical: 8,
  },
  listItem: {
    backgroundColor: "transparent",
  },
});

export default CountryDetails;
