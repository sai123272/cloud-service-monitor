import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
  query GetServices {
    services {
      id
      name
      status
      uptime
      incidents
      lastChecked
    }
  }
`;