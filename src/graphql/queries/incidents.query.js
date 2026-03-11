import { gql } from "@apollo/client";

export const GET_INCIDENTS = gql`
  query GetIncidents {
    incidents {
      id
      title
      serviceName
      severity
      status
      assignee
      createdAt
    }
  }
`;