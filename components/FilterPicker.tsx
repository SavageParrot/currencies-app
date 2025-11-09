import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Componente reutilizable para mostrar un filtro tipo Picker con etiqueta y opciones.
 * @param label Etiqueta del filtro (ej: "Continente")
 * @param value Valor seleccionado
 * @param options Opciones disponibles para el Picker
 * @param onChange Función que se llama al cambiar el valor
 * @param style Estilo para el contenedor
 * @param pickerStyle Estilo para el Picker
 * @param disabled Deshabilita el Picker
 */
interface FilterPickerProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  style?: object;
  pickerStyle?: object;
  disabled?: boolean;
}

const FilterPicker: React.FC<FilterPickerProps> = ({
  label,
  value,
  options,
  onChange,
  style,
  pickerStyle,
  disabled = false,
}) => (
  <View style={[styles.filterContainer, style]}>
    <Text style={styles.filterLabel}>{label}</Text>
    <Picker
      style={[styles.picker, pickerStyle]}
      selectedValue={value}
      onValueChange={onChange}
      enabled={!disabled && options.length > 0}
    >
      <Picker.Item label="Todos" value="" />
      {options.map((item) => (
        <Picker.Item key={item} label={item} value={item} />
      ))}
    </Picker>
  </View>
);

const styles = StyleSheet.create({
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
});

export default FilterPicker;
