import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Stars from 'react-native-stars';
import styled from 'styled-components/native';
import * as BaseComponents from '../components/BaseComponents';
import { Colors } from '../assets/Colors';
import BottomButton from '../components/BottomButton';

export class RatingScreen extends React.Component {
  // this.props.navigation.push('DonationScreen', {screenName, store});
  // props passed by react navigation from the previous screen
  render() {
    // const { screenName, store } = this.props.route;
    let stars = 0;
    const ratingBlock = (
      <Block>
        <BlockText>
          Provide a safety rating for this store:
        </BlockText>
        <StarBox>
          <View style={{
            alignItems: 'center',
          }}
          >
            <Stars
              half
              default={0}
              update={(val) => { stars = val; }}
              spacing={15}
              starSize={40}
              count={5}
              fullStar={require('@assets/images/ratingStar.png')}
              emptyStar={require('@assets/images/starOutline.png')}
              halfStar={require('@assets/images/starHalf.png')}
            />
          </View>
        </StarBox>
      </Block>
    );

    return (
      <FullScreen>
        <HeaderContainer>
          <HeaderText>Shopping trip success!</HeaderText>
        </HeaderContainer>
        <Block>
          {ratingBlock}
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
