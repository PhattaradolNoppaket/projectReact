import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import styles from'./components/styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Text >SaigrogEzan</Text>
    <Logo/>
    </View>
    
  )
}

export default App
;