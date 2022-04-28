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



