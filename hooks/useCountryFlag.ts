import { useMemo } from "react";

/**
 * Hook para convertir un string de código emoji Unicode (ej: "U+1F1E6 U+1F1FA") en el emoji de bandera correspondiente.
 * Utiliza useMemo para evitar cálculos innecesarios.
 * @param emojiU Código Unicode de la bandera (ejemplo: "U+1F1E6 U+1F1FA")
 * @returns Emoji de bandera renderizable en React Native/web
 */
export function useCountryFlag(emojiU?: string): string {
  return useMemo(() => {
    if (!emojiU) return "";
    const codePoints = emojiU
      .split(" ")
      .map((cp) => parseInt(cp.replace("U+", ""), 16));
    return String.fromCodePoint(...codePoints);
  }, [emojiU]);
}
