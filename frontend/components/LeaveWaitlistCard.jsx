import React from 'react';
import * as Font from 'expo-font';
import * as BottomButton from '@components/BottomButton'
import * as BaseComponents from '@components/BaseComponents';
import { View } from 'react-native';

export function LeaveWaitlistCard(store) {
  return (
    <BaseComponents.WaitBottomCard>
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
