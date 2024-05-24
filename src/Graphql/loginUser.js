// src/graphql/queries.js
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($loginInput: LoginInput!) {
    loginUser(loginInput: $loginInput) {
      username
      email
      token
    }
  }
`;
