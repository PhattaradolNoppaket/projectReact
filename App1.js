import { View, Text ,StyleSheet ,Button} from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import styles from'./components/styles'
// import Cafe from './components/Cafe'
// import Textinputexample from './components/textinputexample';

const App = () => {

const ShowData=()=>{
alert("หวัดไม่ดีคับเพ่")
}



  return (
    <View style={styles.container}>
      <Text>GoGo PowerRangerrrrrrrrr</Text>
    <Logo/>
    <Button
    onPress={ShowData}
    title='หวัดนะไม่ใช่โควิด'
    />
    {/* <Textinputexample></Textinputexample> */}
    {/* <Cafe/> */}
    </View>
    
  )
}

export default App
;