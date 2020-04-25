import React from 'react';
import { View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

function BottomButton({ text, theme, onPress }) {
    return (
        <View style={{ width: '85%' }}>
            <ThemeProvider theme={theme}>
                <Button
                    title={text}
                    onPress={onPress}
                    containerViewStyle={{ width: '100%', marginLeft: 0, marginRight: 0 }}
                >
                </Button>
            </ThemeProvider>
        </View >
    )
}

const bluetheme = {
    Button: {
        titleStyle: {
            color: 'white',
        },
        buttonStyle: {
            backgroundColor: '#126BD0',
        }
    },
};

const whitetheme = {
    Button: {
        titleStyle: {
            color: '#126BD0',
        },
        buttonStyle: {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#126BD0',
            borderStyle: 'solid',
        }
    },
};

const graytheme = {
    Button: {
        titleStyle: {
            color: 'white',
        },
        buttonStyle: {
            backgroundColor: '#BDBDBD',
        }
    },
}


module.exports = { graytheme, whitetheme, bluetheme, BottomButton }
