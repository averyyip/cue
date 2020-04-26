import React from 'react';
import styled from 'styled-components/native';
import * as BaseComponents from '@components/BaseComponents';
import { Image, StyleSheet, requireNativeComponent } from 'react-native';

export function LeaveWaitlistCard(store) {
    return (
        <BottomCard>
            <StoreTitle>{store}</StoreTitle>
        </BottomCard>
    );
}

export const BottomCard = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  border-radius: 5px;
  height: 33%;
  position: absolute;
  bottom:0;
  left:0;
  background-color: #DC7777;
`;

export const StoreTitle = styled(BaseComponents.TinyHeader)`
  text-align: center;
  margin-bottom: 5px;
`;