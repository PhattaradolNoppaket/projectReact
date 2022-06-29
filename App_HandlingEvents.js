import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
const ShowData=()=>{
  alert("Hello There")
  }
const App = () => {
  return (
    <View style = {styles.container}>
      <Text>Button Example</Text>
      <Button
      color ='#00ff33'
    onPress={ShowData}
    title='click me'
    />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
}
});
