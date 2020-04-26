import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../assets/Colors';

function StoreMarker({ storeName, focused }) {
  return (
    <MarkerContainer>
      {focused ? (
        <Image
          style={{ width: 64, height: 64 }}
          source={require('../assets/images/focus.png')}
        />
      ) : (
        <Image
          style={{ width: 32, height: 32 }}
          source={require('../assets/images/unfocus.png')}
        />
      )}
      <MarkerStoreContainer>
        <MarkerStoreName focused={focused}>{storeName}</MarkerStoreName>
      </MarkerStoreContainer>
    </MarkerContainer>
  );
}

export default StoreMarker;

export const MarkerContainer = styled.View`
  width: 200px
  display: flex
  align-items: center
`;

export const MarkerStoreContainer = styled.View`
  background-color: ${props => (props.focused ? Colors.Yellow : Colors.Yellow)};
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 5px;
;`

export const MarkerStoreName = styled.Text`
  font-size: ${props => (props.focused ? '12px' : '12px')};
  line-height: ${props => (props.focused ? '24px' : '20px')};
  text-align: center;
  color: ${Colors.White};

`;