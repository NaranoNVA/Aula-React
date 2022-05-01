import { gql } from '@apollo/client';

export const GET_POSTS = gql`
    query Posts {
        post {
            id
            image
            likes
            text
            user {
                id
                image
                name
                username
              }
          }
        }
`;

export const GET_POSTS_LIKES = gql`
    query Posts {
        post {
            id
            image
            likes
            text
            user {
                id
                image
                name
                username
              }
              posts_likes {
                user_id
              }
              posts_likes_aggregate {
                aggregate {
                  count(columns: id)
                }
              }
          }
        }
`;



