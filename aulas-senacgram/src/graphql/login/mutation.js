import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
mutation ADD_USER($name: String!, $password: String!, $username: String!) {
    insert_user(objects: {name: $name, password: $password, username: $username}) {
      returning {
        id
        name
        username
        image
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation MyMutation($name: String = "", $image: String = "", $id: uuid = "") {
  update_user(_set: {name: $name, image: $image}, where: {id: {_eq: $id}}) {
    returning {
      id
      name
      password
      username
      image
    }
  }
}
`;