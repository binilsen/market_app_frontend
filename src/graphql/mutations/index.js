import { gql } from "@apollo/client";

export const SESSION_REG = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phone: String!
  ) {
    createUser(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        phone: $phone
      }
    ) {
      firstName
      lastName
      ulid
    }
  }
`;

export const SESSION_LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    signInUser(input: { email: $email, password: $password }) {
      user {
        firstName
      }
      token
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation (
    $title: String!
    $description: String!
    $quantity: Int!
    $price_inr: Float!
    $attachments_attributes: [AttachmentInput!]
    $category_id: ID!
  ) {
    createProduct(
      input: {
        title: $title
        description: $description
        quantity: $quantity
        priceInr: $price_inr
        attachmentsAttributes: $attachments_attributes
        categoryId: $category_id
      }
    ) {
      product {
        title
        description
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation ($products_user_id: ID!) {
    addProduct(input: { productsUserId: $products_user_id }) {
      cart {
        ulid
        items {
          id
        }
        total
      }
    }
  }
`;
