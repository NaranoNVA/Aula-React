import { gql } from "@apollo/client";

export const ADICIONAR_MUSICA = gql`
mutation inserirMusica($artista: String!, $duracao: Float!, $thumbnail: String!, $titulo: String!, $url: String!) {
    insert_musicas(objects: {artista: $artista, duracao: $duracao, thumbnail: $thumbnail, titulo: $titulo, url: $url}) {
      affected_rows
    }
  }
`;