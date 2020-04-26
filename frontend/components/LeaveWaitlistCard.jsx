import React from 'react';
import styled from 'styled-components/native';
import * as BottomButton from '@components/BottomButton'
import * as BaseComponents from '@components/BaseComponents';
import { Image, View } from 'react-native';

export function LeaveWaitlistCard(store) {
  return (
    <BaseComponents.BottomCard>
      <BaseComponents.StoreTitle>{store}</BaseComponents.StoreTitle>
      <View style={{ flexDirection: 'row' }}>
        <BaseComponents.CardText>You will be notified 15 minutes before your time slot</BaseComponents.CardText>
        <BaseComponents.TimeImage source={require('@assets/images/time.png')} style={{
          width: 154,
          height: 114,
          resizeMode: 'contain',
        }}
        ></BaseComponents.TimeImage>
      </View >
      <BaseComponents.ButtonPosition>
        {BottomButton.BottomButton({ text: "Leave the Waitlist", theme: BottomButton.whitetheme })}
      </BaseComponents.ButtonPosition>
    </BaseComponents.BottomCard >
  );
}