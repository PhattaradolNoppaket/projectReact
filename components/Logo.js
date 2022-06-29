import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './StySheet'

const Logo = () => {
  const textLogo = "Lmao Gid Gud"
  const isTH = false;
  return (
    <View>
      <Text style={styles.textLogo}>TNI</Text>
      <Text>{textLogo}</Text>
      {/* {
        isTH && <text>ภาษาทาย</text>
      } */}
      {/* use if else or conditional operator */}
      {
        isTH
        ?(<Text>ภาษาทาย</Text>)
        :(<Text>ภาษาอาไร</Text>)
      }
    </View>
  )
}

export default Logo
// const styles = StyleSheet.create({
//   TextLogo:{
//     color:"red",
//     fontSize:60
//   }
// })

