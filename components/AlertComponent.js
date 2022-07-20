import { StyleSheet, Text, View,Button,Alert } from 'react-native'
import React from 'react'

const AlertComponent = () => {
    const simpleAlertHanler =() =>{
        alert('Hello I am Simple Alert from Javascript')
    }
    const twoOptionAlertHanler=()=>{
        Alert.alert(
            'Hello',
            'I am two option alert from React Native',
            [
                {
                    text:'Yes',
                    onPress: ()=> alert('Yes Pressed')
                },
                {
                    text:'No',
                    onPress: ()=> alert('No Pressed'),
                    style:'cancel'
                }
           
            ]
        )
    }
  return (
    <View style={styles.container}>
      <Button
      title = 'simple Alert'
      onPress={simpleAlertHanler}
      />
      <Button
      title = 'Alert with Two Option'
      onPress={twoOptionAlertHanler}
      />
    </View>

  )
}

export default AlertComponent



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
})