import React from 'react';
import * as Font from 'expo-font';
import * as BottomButton from '@components/BottomButton'
import * as BaseComponents from '@components/BaseComponents';
import { View } from 'react-native';
import styled from 'styled-components/native';

export function LeaveWaitlistCard(store) {
  return (

    <BaseComponents.WaitBottomCard>
      <OrangeBox>
        <OrangeBoxText>
          Make sure you're within a x radius of the store when there are 15 minutes until your turn.
        </OrangeBoxText>
      </OrangeBox>
      <BaseComponents.WaitCardStoreTitle>{store}</BaseComponents.WaitCardStoreTitle>
      <View style={{ flexDirection: 'row' }}>
        <BaseComponents.WaitCardText>You will be notified 15 minutes before your time slot</BaseComponents.WaitCardText>
        <BaseComponents.WaitCardImage source={require('@assets/images/time.png')} style={{
          width: 154,
          height: 114,
          resizeMode: 'contain',
        }}
        ></BaseComponents.WaitCardImage>
      </View >
      <BaseComponents.WaitCardButtonPosition>
        {BottomButton.BottomButton({ text: "Leave the Waitlist", theme: BottomButton.whitetheme })}
      </BaseComponents.WaitCardButtonPosition>
    </BaseComponents.WaitBottomCard >
  );
}

export const OrangeBox = styled.View`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 97%;
  border-radius: 3px;
  height: 20%;
  background-color: #E76A42;
  margin-top: -17%;
  z-index: 1;
`;

export const OrangeBoxText = styled.Text`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  width: 88%;
  z-index: 0;
  margin-top: 2.49%
  font-weight: bold;
`;