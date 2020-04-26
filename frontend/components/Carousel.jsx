import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import { Colors } from '@assets/Colors';
import { CarouselCard } from './CarouselCard';


export default class CarouselApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
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

  get pagination() {
    const { activeSlide } = this.state;
    const numDots = 3;
    return (
      <Pagination
        dotsLength={numDots}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#E76A42',
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
          backgroundColor: '#606060',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
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
            data={this.props.carouselItems}
            sliderWidth={360}
            itemWidth={360}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
          {/* { this.pagination } */}
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
  height: 100%;
`;
