import { CountryData } from "@/types/currenciesTypes";
import { useRouter } from "expo-router";
import React, { useCallback, useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CountryCardProps {
  countryData: CountryData;
}

const CountryCard = React.memo(({ countryData }: CountryCardProps) => {
  const router = useRouter();

  const emoji = useMemo(() => {
    const codePoints = countryData.emojiU
      .split(" ")
      .map((cp) => parseInt(cp.replace("U+", ""), 16));
    return String.fromCodePoint(...codePoints);
  }, [countryData.emojiU]);

  const handlePress = useCallback(
    (countryData: CountryData) => {
      router.navigate({
        pathname: "/(tabs)/(countries)/countryDetailsScreen",
        params: { countryData: JSON.stringify(countryData) },
      });
    },
    [router]
  );

  return (
    <Pressable style={styles.card} onPress={() => handlePress(countryData)}>
      <View style={styles.hstack}>
        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.nameText}>
            {countryData.name}
          </Text>
          <Text style={styles.detailText}>{countryData.continent.name}</Text>
        </View>
        <View>
          <Text style={styles.flag}>{emoji}</Text>
          <Text style={styles.detailText}>{countryData.code}</Text>
        </View>
      </View>
    </Pressable>
  );
});

export default CountryCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginBottom: 4,
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#8b99a5ff",
    color: "white",
    backgroundColor: '#e0ecff',
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  detailText: {
    color: "black",
  },
  hstack: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    maxWidth: "85%",
  },
  flag: {
    fontSize: 30,
  },
});
