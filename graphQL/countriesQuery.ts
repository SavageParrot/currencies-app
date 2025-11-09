import { gql } from "@apollo/client";

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
