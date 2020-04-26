import React from 'react';
import styled from 'styled-components/native';
import * as BottomButton from '@components/BottomButton'
import * as BaseComponents from '@components/BaseComponents';
import { Image, View } from 'react-native';

export function LeaveWaitlistCard(store) {
  return (
    <BottomCard>
      <StoreTitle>{store}</StoreTitle>
      <View style={{ flexDirection: 'row' }}>
        <CardText>You will be notified 15 minutes before your time slot</CardText>
        <TimeImage source={require('@assets/images/time.png')} style={{
          width: 154,
          height: 114,
          resizeMode: 'contain',
        }}
        ></TimeImage>
      </View >
      <ButtonPosition>
        {BottomButton.BottomButton({ text: "Leave the Waitlist", theme: BottomButton.whitetheme })}
      </ButtonPosition>
    </BottomCard >
  );
}

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

export const StoreTitle = styled(BaseComponents.TinyHeader)`
  font-size: 18px;
  font-weight: bold;
  color: #2CB572;
  margin-top: 18px;
  margin-left: 28px;
`;

export const CardText = styled(BaseComponents.BodyText)`
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