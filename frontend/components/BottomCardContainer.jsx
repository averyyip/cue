import React from 'react';
import { CarouselCard } from '@components/CarouselCard';
import CarouselApp from '@components/Carousel';
import StoreInfo from '@components/StoreInfo';
import { StyleSheet, Text, View } from 'react-native';
import * as BottomButton from '@components/BottomButton';
import * as BaseComponents from '@components/BaseComponents';
import axios from 'axios';


export default class BottomCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null
      };
    }

    async joinWaitlist(storeID, userID) {
        console.log(storeID);
        console.log(userID);
        try {
          const response = await axios.post('https://hacknow-bp.uc.r.appspot.com/joinWaitlist', {
            params: {
              storeID: storeID,
              userUUID: userID,
            },
          });
          console.log(response.data)
          console.log("JOINED")
        } catch (error) {
          console.error(error);
        }
    }

    async getUser(username) {
        try {
            const response = await axios.get('https://hacknow-bp.uc.r.appspot.com/login', {
                params: {
                    username: username
                },
              });
            this.setState({
                user: {
                    username: response.data.username,
                    userUUID: response.data._id
                }
            })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async componentDidMount() {
        await this.getUser('test');
        console.log(this.state.user);
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
                    {BottomButton.BottomButton({text: "JOIN THE WAITLIST", theme: BottomButton.bluetheme, 
                    onPress: () => this.joinWaitlist(this.props.storeRecord.id, this.state.user.userUUID)})}
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