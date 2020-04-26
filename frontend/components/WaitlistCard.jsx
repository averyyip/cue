import React from 'react';
import { CarouselCard } from '@components/CarouselCard';
import CarouselApp from '@components/Carousel';
import StoreInfo from '@components/StoreInfo';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import * as BottomButton from '@components/BottomButton';
import * as BaseComponents from '@components/BaseComponents';
import styled from 'styled-components/native';

const lessthanfifteen = true;
const withinradius = true;

export default class WaitlistCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content;
    if (!lessthanfifteen) {
      content = (
        <Card>
          <CheckInView>
            <LeftText style={{ width: 200 }}>
              You will be notified 15 minutes before your time slot
            </LeftText>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={require('../assets/images/time.png')}
            />
          </CheckInView>
          <ButtonPosition>
            {BottomButton.BottomButton({ text: 'JOIN THE WAITLIST', theme: BottomButton.bluetheme })}
          </ButtonPosition>
        </Card>
      );
    } else if (lessthanfifteen && !withinradius) {
      content = (
        <Card>
          <CheckInView>
            <LeftText style={{ width: 200 }}>
              Once you are closer to the store, you will be able to check-in!
            </LeftText>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={require('../assets/images/destination.png')}
            />
          </CheckInView>
          <ButtonPosition>
            {BottomButton.BottomButton({ text: 'CHECK-IN', theme: BottomButton.graytheme })}
            <Button
              title="Leave the waitlist"
              titleStyle={{
                color: 'black',
                fontSize: 14,
              }}
              buttonStyle={{
                backgroundColor: 'transparent',
              }}
            />
          </ButtonPosition>
        </Card>
      );
    } else {
      content = (
        <Card>
          <CheckInView>
            <LeftText style={{ width: 200 }}>
              Good news! 15 minutes until your time slot!
            </LeftText>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={require('../assets/images/celebrate.png')}
            />
          </CheckInView>
          <ButtonPosition>
            {BottomButton.BottomButton({ text: 'CHECK-IN', theme: BottomButton.bluetheme })}
            <Button
              title="Leave the waitlist"
              titleStyle={{
                color: 'black',
                fontSize: 14,
              }}
              buttonStyle={{
                backgroundColor: 'transparent',
              }}
            />
          </ButtonPosition>
        </Card>
      );
    }
    return (
      <View style={styles.container}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%'
  },
});

const Card = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

const CheckInView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 95%;
  height:75%;
`;

const LeftText = styled(BaseComponents.LargeHeader)`
  text-align: left;
`;

const ButtonPosition = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
