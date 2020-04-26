import React from 'react';
import * as Font from 'expo-font';
import styled from 'styled-components/native';
import * as BottomButton from '@components/BottomButton'
import { Button } from 'react-native-elements';
import * as BaseComponents from '@components/BaseComponents';
import { View, StyleSheet } from 'react-native';

function Separator() {
    return <View style={styles.separator} />;
}

export function CheckInCard({ store, time }) {
    return (
        <BaseComponents.WaitBottomCard>
            <BaseComponents.WaitCardStoreTitle>{store}</BaseComponents.WaitCardStoreTitle>
            <View style={{ flexDirection: 'row' }}>
                <CheckInCardText>Good news! You have <OrangeText>{time}</OrangeText> until your time slot!
                </CheckInCardText>
                <WaitDestImage source={require('@assets/images/celebrate.png')} style={{
                    width: 133,
                    height: 125,
                    resizeMode: 'contain',
                }}
                ></WaitDestImage>
            </View >
            <BaseComponents.WaitCardButtonPosition>
                {BottomButton.BottomButton({ text: "Check In", theme: BottomButton.bluetheme })}
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

export const OrangeText = styled.Text`
  color: #E76A42;
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

export const CheckInCardText = styled(BaseComponents.BodyText)`
  font-size: 22px;
  font-weight: bold;
  color: black;
  margin-top: 15px;
  margin-left: 28px;
  width: 40%;
  margin-right: 30px;
`;