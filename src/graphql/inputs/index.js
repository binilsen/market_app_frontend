import { gql } from "@apollo/client";

export const AttachmentInputType = gql`
  input AttachmentInputType {
    image_data: String
  }
`;
