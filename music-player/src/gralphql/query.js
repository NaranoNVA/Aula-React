import { gql } from "@apollo/client";

export const PEGAR_MUSICAS = gql`
query pegarMusicas {
    musicas(order_by: {data_criacao: desc}) {
      artista
      duracao
      id
      thumbnail
      titulo
      url
    }
  }
`;