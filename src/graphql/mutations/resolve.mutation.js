import { gql } from "@apollo/client";

export const RESOLVE_INCIDENT = gql`
  mutation ResolveIncident($id: ID!) {
    resolveIncident(id: $id) {
      id
      status
    }
  }
`;