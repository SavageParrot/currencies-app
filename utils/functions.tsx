// Formatea el texto para regex case-insensitive
export function toCaseInsensitiveRegex(fragment: string): string {
  return fragment
    .split("")
    .map((ch) => {
      const up = ch.toUpperCase();
      const low = ch.toLowerCase();
      if (up === low) {
        // no-letters: escapa regex
        return ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      return `[${low}${up}]`;
    })
    .join("");
}