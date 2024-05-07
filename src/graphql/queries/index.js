import { gql } from "@apollo/client";
export const SESSION_CHECK = gql`
  query {
    session {
      user {
        firstName
        lastName
      }
    }
  }
`;

export const CATEGORIES = gql`
  query {
    categories {
      id
      title
      ulid
    }
  }
`;

export const PRODUCTS = gql`
  query ($categoryId: String) {
    products(categoryId: $categoryId) {
      title
      ulid
      description
      lowestPrice {
        id
        price
      }
      availableQuantity
      sellers {
        price
        quantity
        attachments {
          image
        }
        user {
          username
        }
      }
    }
  }
`;

export const CART = gql`
  query {
    cart {
      ulid
      items {
        seller {
          attachments {
            image
          }
          price
          quantity
          user {
            username
          }
          product {
            title
            description
          }
        }
      }
      total
    }
  }
`;
