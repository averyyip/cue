import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import { CarouselCard } from './CarouselCard';


export default class CarouselApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        CarouselCard('smallbusiness'),
        CarouselCard('berkeleybowl'),
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={{
        borderRadius: 5,
        height: 200,
        width: 340,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
      }}
      >
        {item}
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{
        flex: 1, paddingTop: 50, height: 220, width: 360,
      }}
      >
        <CarouselView>
          <Carousel
            layout="default"
            ref={(ref) => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={360}
            itemWidth={360}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </CarouselView>
      </SafeAreaView>
    );
  }
}

const CarouselView = styled.View`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
