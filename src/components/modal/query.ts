import { gql } from 'urql';

export const query = gql`
  query {
    launchesPast {
      id
      mission_name
      launch_date_local
      links {
        article_link
        video_link
      }
    }
  }
`;
