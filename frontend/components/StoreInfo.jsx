import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import Stars from 'react-native-stars';
import { Colors } from '../assets/Colors';
import * as BaseComponents from './BaseComponents';

export default function StoreInfo(storeRecord) {
  const norating = (
    <BaseComponents.BodyText style={{
      marginLeft: 10, color: '#E76A42',
    }}
    >
      No ratings yet
    </BaseComponents.BodyText>
  );
  return (
    <Container>
      <BoldHeader>{storeRecord.name}</BoldHeader>
      <AddressText>{storeRecord.location.address}</AddressText>
      <RatingContainer>
        <Stars
          disabled={true}
          display={storeRecord.rating}
          spacing={8}
          count={5}
          starSize={25}
          fullStar={require('@assets/images/starFilled.png')}
          emptyStar={require('@assets/images/starEmpty.png')}
          halfStar={require('@assets/images/starHalf.png')}
        />
        <Image
          style={{
            width: 15,
            height: 15,
            resizeMode: 'contain',
            marginLeft: 10,
          }}
          source={require('../assets/images/heatlh-rating.png')}
        />
        {(storeRecord.healthRatings.length == 0) ? norating : null}
      </RatingContainer>
      <WaitTimeContainer>
        <WaitTime>{storeRecord.waitlist.length.toString()} waiting </WaitTime>
      </WaitTimeContainer>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  height: 75px;
  width: 340px;
  margin-left: 30px;
  margin-right: auto;
  padding-top: 30px;
`;


const BoldHeader = styled(BaseComponents.LargeHeader)`
  text-align:left;
`;

const WaitTime = styled(BaseComponents.Time)`
  margin-top: 3px;
  margin-bottom: 3px;
  text-align: left;
  color: ${Colors.White};
`;

const AddressText = styled(BaseComponents.AddressText)`
  text-align:left;
  color: ${Colors.textGray};
  margin-top: 5px;
`;

const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const WaitTimeContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${Colors.Green};
  border-radius: 112px;
  width: 50%
`;
