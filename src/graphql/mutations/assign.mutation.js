import { gql } from "@apollo/client";

export const ASSIGN_TO_ME = gql`
  mutation AssignToMe($id: ID!) {
    assignIncident(id: $id) {
      id
      assignee
    }
  }
`;