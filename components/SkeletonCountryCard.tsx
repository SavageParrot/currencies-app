import React from "react";
import { StyleSheet, View } from "react-native";

const SkeletonCountryCard = () => (
  <View style={styles.card}>
    <View style={styles.hstack}>
      <View style={styles.textContainer}>
        <View style={styles.skeletonText} />
        <View style={[styles.skeletonText, { width: 80, marginTop: 8 }]} />
      </View>
      <View style={styles.flagContainer}>
        <View style={styles.skeletonFlag} />
        <View style={[styles.skeletonText, { width: 40, marginTop: 8 }]} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginBottom: 4,
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e7e7e7ff",
    backgroundColor: "#80848aff",
  },
  hstack: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    maxWidth: "85%",
  },
  skeletonText: {
    height: 18,
    width: 120,
    backgroundColor: "#dbeafe",
    borderRadius: 6,
  },
  flagContainer: {
    alignItems: "center",
  },
  skeletonFlag: {
    height: 30,
    width: 30,
    backgroundColor: "#dbeafe",
    borderRadius: 15,
  },
});

export default SkeletonCountryCard;
