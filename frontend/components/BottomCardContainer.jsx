import React from 'react';
import { CarouselCard } from '@components/CarouselCard';
import CarouselApp from '@components/Carousel';
import StoreInfo from '@components/StoreInfo';
import { StyleSheet, Text, View } from 'react-native';
import * as BottomButton from '@components/BottomButton';
import * as BaseComponents from '@components/BaseComponents';


export default class BottomCard extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        const items = [
            CarouselCard('smallbusiness'),
            CarouselCard('berkeleybowl'),
            CarouselCard('wholefoods'),
        ]

        let content;
        if (this.props.storeRecord == "carousel") {
            content = <CarouselApp carouselItems={items}/>
        } else {
            content = <>
                {StoreInfo(this.props.storeRecord)}
                <BaseComponents.WaitCardButtonPosition>
                    {BottomButton.BottomButton({text: "JOIN THE WAITLIST", theme: BottomButton.bluetheme})}
                </BaseComponents.WaitCardButtonPosition>
            </>
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