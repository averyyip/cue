import React from 'react';
import * as Font from 'expo-font';
import styled from 'styled-components/native';
import * as BottomButton from '@components/BottomButton'
import { Button } from 'react-native-elements';
import * as BaseComponents from '@components/BaseComponents';
import { Image, View, StyleSheet } from 'react-native';

function Separator() {
    return <View style={styles.separator} />;
}

export function ClosertoStoreCard(store) {
    return (
        <BaseComponents.WaitBottomCard>
            <BaseComponents.WaitCardStoreTitle>{store}</BaseComponents.WaitCardStoreTitle>
            <View style={{ flexDirection: 'row' }}>
                <BaseComponents.WaitCardText>Once you are closer to the store, you will be able to check-in!</BaseComponents.WaitCardText>
                <WaitDestImage source={require('@assets/images/destination.png')} style={{
                    width: 133,
                    height: 125,
                    resizeMode: 'contain',
                }}
                ></WaitDestImage>
            </View >
            <BaseComponents.WaitCardButtonPosition>
                {BottomButton.BottomButton({ text: "Check In", theme: BottomButton.graytheme })}
            </BaseComponents.WaitCardButtonPosition>
            <LeaveWaitlistButton>
                <Button
                    title="Leave the waitlist"
                    titleStyle={{
                        color: "black",
                        fontSize: 14,
                    }}
                    buttonStyle={{
                        backgroundColor: "white",
                    }}
                >
                </Button>
                <View style={{ alignSelf: 'center' }}>
                    <Separator />
                </View>
            </LeaveWaitlistButton>
        </BaseComponents.WaitBottomCard >
    );
}

export const WaitDestImage = styled.Image`
  margin-top: 5px;
  margin-left: -5px;
`;

export const LeaveWaitlistButton = styled.View`
display: flex;
align-self: center;
  margin-top: 5px;
  width: 200px;
`;

const styles = StyleSheet.create({
    separator: {
        marginVertical: -8,
        borderBottomColor: '#737373',
        borderBottomWidth: 1,
        width: 112
    },
});