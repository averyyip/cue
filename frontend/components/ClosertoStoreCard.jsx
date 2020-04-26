import React from 'react';
import styled from 'styled-components/native';
import * as BottomButton from '@components/BottomButton'
import * as BaseComponents from '@components/BaseComponents';
import * as LeaveWaitlistCard from '@components/LeaveWaitlistCard'
import { Image, View } from 'react-native';

export function ClosertoStoreCard(store) {
    return (
        <BottomCard>
            <StoreTitle>{store}</StoreTitle>
            <View style={{ flexDirection: 'row' }}>
                <CardText>Once you are closer to the store, you will be able to check-in!</CardText>
                <TimeImage source={require('@assets/images/destination.png')} style={{
                    width: 154,
                    height: 114,
                    resizeMode: 'contain',
                }}
                ></TimeImage>
            </View >
            <ButtonPosition>
                {BottomButton.BottomButton({ text: "Check in", theme: BottomButton.graytheme })}
            </ButtonPosition>
        </BottomCard >
    );
}