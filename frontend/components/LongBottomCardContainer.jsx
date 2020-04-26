import React from 'react';
import { CarouselCard } from '@components/CarouselCard';
import CarouselApp from '@components/Carousel';
import StoreInfo from '@components/StoreInfo';
import { StyleSheet, Text, View } from 'react-native';
import * as BottomButton from '@components/BottomButton';
import * as BaseComponents from '@components/BaseComponents';
import styled from 'styled-components/native';


export default class BottomCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [
      CarouselCard('mask'),
      CarouselCard('distance'),
      CarouselCard('shoppinglist'),
      CarouselCard('neighbors'),
    ];

    let content;
    if (this.props.storeRecord == 'carousel') {
      content = <CarouselApp carouselItems={items} />;
    } else {
      content = (
        <>
          {StoreInfo(this.props.storeRecord)}
          <BaseComponents.WaitCardButtonPosition>
            {BottomButton.BottomButton({ text: 'JOIN THE WAITLIST', theme: BottomButton.bluetheme })}
          </BaseComponents.WaitCardButtonPosition>
        </>
      );
    }
    return (
      <Card>
        <StoreInfoCard>
          {StoreInfo(this.props.storeRecord)}
        </StoreInfoCard>
        {content}
      </Card>
    );
  }
}

export const Card = styled.View`
  width: 100%;
  height: 50%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StoreInfoCard = styled.View`
  height: 100px;
  margin-top: 10px;
  margin-bottom: 0px;
`;
