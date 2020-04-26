import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Stars from 'react-native-stars';
import { Colors } from '../assets/Colors';
import * as BaseComponents from './BaseComponents';

export default function StoreInfo(storeRecord) {
  const norating = (
    <BaseComponents.BodyText>
      No Rating
    </BaseComponents.BodyText>
  );

  console.log(storeRecord);
  return (
    <View>
      <BoldHeader>{storeRecord.name}</BoldHeader>
      <AddressText>{storeRecord.address}</AddressText>
      {/* <RatingContainer>
        <Stars
          display={storeRecord.rating}
          spacing={8}
          count={5}
          starSize={30}
          fullStar={require('@assets/images/starFilled.png')}
          emptyStar={require('@assets/images/starEmpty.png')}
          halfStar={require('@assets/images/starHalf.png')}
        /> */}
      <Image
        style={{
          width: 10,
          height: 10,
          resizeMode: 'contain',
        }}
        source={require('../assets/images/heatlh-rating.png')}
      />
      {/* {(storeRecord.rating == 0) ? norating : null}
      </RatingContainer> */}
    </View>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75px;
`;

const BoldHeader = styled(BaseComponents.LargeHeader)`
  text-align:left;
`;

const AddressText = styled(BaseComponents.AddressText)`
  text-align:left;
  color: ${Colors.TextGray};
`;

const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
