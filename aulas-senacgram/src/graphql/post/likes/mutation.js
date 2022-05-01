import { gql } from "@apollo/client";

export const INSERT_LIKE = gql`
mutation InsertLike($post_id: uuid = "", $user_id: uuid = "") {
    insert_post_likes(objects: {post_id: $post_id, user_id: $user_id}) {
      affected_rows
    }
  }
`;

export const REMOVE_LIKE = gql`
mutation DeleteLike($post_id: uuid = "", $user_id: uuid = "") {
  delete_post_likes(where: {post_id: {_eq: $post_id}, user_id: {_eq: $user_id}}) {
    affected_rows
  }
}
`;