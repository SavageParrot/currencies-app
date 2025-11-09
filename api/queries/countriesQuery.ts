
import { gql } from "@apollo/client";

/**
 * Query para obtener países filtrados por nombre usando regex.
 *
 * @param {string} term - Expresión regular generada por toCaseInsensitiveRegex, ejemplo: "[cC][oO]" para buscar "co" sin importar mayúsculas/minúsculas.
 * @returns {Object[]} countries - Lista de países con: code, name, continent.name, languages.name, capital, currency, emojiU.
 *
 * Uso:
 *   client.query({ query: GET_COUNTRIES_BY_NAME, variables: { term: toCaseInsensitiveRegex("co") } })
 */

export const GET_COUNTRIES_BY_NAME = gql`
  query ($term: String!) {
    countries(filter: { name: { regex: $term } }) {
      code
      name
      continent {
        name
      }
      languages {
        name
      }
      capital
      currency
      emojiU
    }
  }
`;
