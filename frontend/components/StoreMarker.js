import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';


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
      <MarkerStoreName focused={focused}>{storeName}</MarkerStoreName>
    </MarkerContainer>
  );
}

export default StoreMarker;

export const MarkerContainer = styled.View`
  width: 150px
  display: flex
  align-items: center
`;

// export const MarkerStoreName = styled.Text`
//   font-family: ${props =>
//     props.focused ? 'poppins-semibold' : 'poppins-medium'};
//   font-size: ${props => (props.focused ? '16px' : '14px')};
//   line-height: ${props => (props.focused ? '24px' : '20px')};
//   text-align: center
//   color: ${Colors.activeText};
// `;