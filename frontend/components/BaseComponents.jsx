import styled from 'styled-components/native';

export const TextBold = styled.Text`
`;

export const TextRegular = styled.Text`
`;

// store names, bold informational text
export const LargeHeader = styled(TextBold)`
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

export const BottomCard = styled.View`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  height: 35%;
  position: absolute;
  bottom:0;
  left:0;
  background-color: white;
`;

export const StoreTitle = styled(TinyHeader)`
  font-size: 18px;
  font-weight: bold;
  color: #2CB572;
  margin-top: 18px;
  margin-left: 28px;
`;

export const CardText = styled(BodyText)`
  font-size: 22px;
  font-weight: bold;
  color: black;
  margin-top: 15px;
  margin-left: 28px;
  width: 50%;
`;

export const ButtonPosition = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 35px;
`;

export const TimeImage = styled.Image`
  margin-top: 15px;
  margin-left: -21px;
`;
