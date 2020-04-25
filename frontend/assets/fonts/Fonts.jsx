import styled from 'styled-components/native';

export const Fonts = {
  'sf-pro-display-bold': require('./SF-Pro-Display-Bold.otf'),
  'sf-pro-display-regular': require('./SF-Pro-Display-Regular.otf'),
};

export const TextBold = styled.Text`
  font-family: sf-pro-display-bold;
`;

export const TextRegular = styled.Text`
  font-family: sf-pro-display-regular;
`;
