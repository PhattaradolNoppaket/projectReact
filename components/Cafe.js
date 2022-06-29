import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Cat from 'Cat'


export class Cafe extends Component {
  render() {
    return (
      <View>
        <Cat/>
        <Cat/>
        <Cat/>
      </View>
    )
  }
}

export default Cafe