import { gql } from 'apollo-boost';

const typeDefsById = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
    }
  }
`;


const typeDefsAll = gql`
{
  characters {
    results {
      id
      name
      image
      species
    }
  }
}
`;

export   { typeDefsById, typeDefsAll };
