import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

/**
 * Componente para mostrar un ítem de detalle de país con título y valor.
 * @param title Título del detalle (ej: "Moneda")
 * @param value Valor del detalle (ej: "USD")
 */
interface CountryDetailItemProps {
  title: string;
  value: string | number;
}

const CountryDetailItem: React.FC<CountryDetailItemProps> = ({ title, value }) => (
  <ListItem bottomDivider containerStyle={styles.listItem}>
    <ListItem.Content>
      <ListItem.Title style={styles.title}>{title}</ListItem.Title>
      <ListItem.Subtitle style={styles.value}>{value}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
);

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "transparent",
  },
  title: {
    fontWeight: "bold",
    color: "#14213d",
    fontSize: 16,
  },
  value: {
    color: "#222",
    fontSize: 15,
  },
});

export default CountryDetailItem;
