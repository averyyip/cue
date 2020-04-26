import styled from 'styled-components/native';

export const TextBold = styled.Text`
`;

export const TextRegular = styled.Text`
`;

// store names, bold informational text
export const LargeHeader = styled(TextBold)`
  font-size: 24px;
`;

export const Time = styled(TextBold)`
  font-size: 20px;
`;

// carousel headers
export const SmallHeader = styled(TextBold)`
  font-size: 16px;
`;

// green store name
export const TinyHeader = styled(TextBold)`
  font-size: 12px;
`;

// button text
export const ButtonText = styled(TextBold)`
  font-size: 20px;
`;

// card descriptions
export const BodyText = styled(TextRegular)`
  font-size: 14px;
`;

// store address
export const AddressText = styled(TextRegular)`
  font-size: 14px;
`;

export const WaitCardButtonPosition = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 130px;
`;
// full width and height
export const BaseScreen = styled.View`
  width: 100%;
  height: 100%;
`;
