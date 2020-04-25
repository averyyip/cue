import styled from 'styled-components/native';

export const TextBold = styled.Text`
  font-family: sf-pro-display-bold;
`;

export const TextRegular = styled.Text`
  font-family: sf-pro-display-regular;
`;

// store names, bold informational text
export const LargeHeader = styled(TextBold)`
  font-size: 20px;
  font-family: sf-pro-display-bold;
`;

// carousel headers
export const SmallHeader = styled(TextBold)`
  font-size: 16px;
  font-family: sf-pro-display-bold;
`;

// green store name
export const TinyHeader = styled(TextBold)`
  font-size: 12px;
  font-family: sf-pro-display-bold;
`;

// button text
export const ButtonText = styled(TextBold)`
  font-size: 20px;
  font-family: sf-pro-display-bold;
`;

// card descriptions
export const BodyText = styled(TextRegular)`
  font-size: 14px;
  font-family: sf-pro-display-regular;
`;

// store address
export const AddressText = styled(TextRegular)`
  font-size: 14px;
  font-family: sf-pro-display-regular;
`;
