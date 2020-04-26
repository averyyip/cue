import React from 'react';
import {
  StyleSheet, View, Image, Linking,
} from 'react-native';
import Stars from 'react-native-stars';
import styled from 'styled-components/native';
import * as BaseComponents from '../components/BaseComponents';
import { Colors } from '../assets/Colors';
import BottomButton from '../components/BottomButton';

export class DonationScreen extends React.Component {
  // this.props.navigation.push('EndingScreen', {screenName, store})
  // props passed by react navigation from the previous screen
  render() {
    // const { screenName, store } = this.props.route;
    const donationBlock = (
      <Block>
        <BlockText>
          Food banks are struggling to keep up with demand.
        </BlockText>
        <Image
          style={{
            width: 150,
            height: 90,
            resizeMode: 'contain',
          }}
          source={require('../assets/images/feedingamerica.png')}
        />
        <ButtonView>
          {BottomButton.BottomButton({ text: 'Donate what you can now.', theme: BottomButton.greentheme, onPress: () => Linking.openURL('https://www.feedingamerica.org/') })}
        </ButtonView>
      </Block>
    );

    return (
      <FullScreen>
        <HeaderContainer>
          <HeaderText>Help your community.</HeaderText>
        </HeaderContainer>
        <Block>
          {donationBlock}
        </Block>
        <Image
          style={styles.bottomImage}
          source={require('../assets/images/scenery.png')}
        />
      </FullScreen>
    );
  }
}

const styles = StyleSheet.create({
  bottomImage: {
    width: '100%',
    maxHeight: '30%',
    resizeMode: 'contain',
    margin: 0,
    padding: 0,
  },
});

const FullScreen = styled(BaseComponents.BaseScreen)`
  display: flex;
  justify-content: space-between;
`;

const ButtonView = styled.View`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

const Block = styled.View`
  width: 90%;
  height: 250;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const StarBox = styled.View`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F2F2F2;
  border-radius: 5px;
`;

const HeaderText = styled(BaseComponents.LargeHeader)`
  color: ${Colors.White};
  margin-left: auto;
  margin-right: auto;
`;

const BlockText = styled(BaseComponents.LargeHeader)`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: 110px;
  background-color: ${Colors.Yellow};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
