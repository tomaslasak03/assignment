import { gql } from 'urql';

export const query = gql`
  query ($offset: Int!) {
    launchesPast(limit: 20, offset: $offset) {
      id
      mission_name
      launch_date_local
      rocket {
        rocket_name
        first_stage {
          cores {
            core {
              reuse_count
            }
            land_success
          }
        }
      }
    }
  }
`;
