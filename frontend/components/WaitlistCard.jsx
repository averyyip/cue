import React from 'react';
import { CarouselCard } from '@components/CarouselCard';
import CarouselApp from '@components/Carousel';
import StoreInfo from '@components/StoreInfo';
import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import * as BottomButton from '@components/BottomButton';
import * as BaseComponents from '@components/BaseComponents';
import styled from 'styled-components/native';

export default class WaitlistCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 0,
    };
  }

  async nextCard() {
    this.setState({
      option: this.state.option + 1,
    });
  }

  render() {
    let content;
    if (this.state.option === 0) {
      content = (
        <Card>
          <CheckInView>
            <LeftText style={{ width: 200 }}>
              You will be notified 15 minutes before your time slot
            </LeftText>
            <TouchableOpacity onPress={async () => await this.nextCard()} activeOpacity={1}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                }}
                source={require('../assets/images/time.png')}
              />
            </TouchableOpacity>
          </CheckInView>
          <ButtonPosition>
            {BottomButton.BottomButton({ text: 'Join the waitlist', theme: BottomButton.bluetheme, onPress: async () => await this.nextCard() })}
          </ButtonPosition>
        </Card>
      );
    } else if (this.state.option === 1) {
      content = (
        <Card>
          <CheckInView>
            <LeftText style={{ width: 200 }}>
              Once you are closer to the store, you will be able to check-in!
            </LeftText>
            <TouchableOpacity onPress={async () => await this.nextCard()} activeOpacity={1}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                }}
                source={require('../assets/images/destination.png')}
              />
            </TouchableOpacity>
          </CheckInView>
          <ButtonPosition>
            {BottomButton.BottomButton({ text: 'Check In', theme: BottomButton.graytheme, onPress: async () => await this.nextCard() })}
            <Button
              title="Leave the waitlist"
              titleStyle={{
                color: 'black',
                fontSize: 14,
              }}
              buttonStyle={{
                backgroundColor: 'transparent',
              }}
              onPress={() => this.props.navigation.navigate('Map')}
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
            {BottomButton.BottomButton({
              text: 'Check In',
              theme: BottomButton.bluetheme,
              onPress: () => this.props.navigation.push('Countdown', { userRecord: this.props.userRecord, storeRecord: this.props.storeRecord }),
            })}
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
