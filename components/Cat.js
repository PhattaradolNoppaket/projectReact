import { Text,TextInput, View } from 'react-native'
import React from 'react';

const Cat = () ={
    return(
        <view>
        <text>'I am also cat'</text>
        <TextInput
        style={{
            height:40,
            borderColor:'gray',
            borderWidth:1
        }}
        />
        </view>
    )
}
export default Cat