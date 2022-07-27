import { StyleSheet, Text, View,Button,SafeAreaView } from 'react-native'
import React,{useState} from 'react'

const DynamicStyle = () => {
const[defaultStyle,setDefaultStyle] =useState(true);
    return (

    <View>
        <SafeAreaView style={{flex:1}}>
            <View style = {styles.container}>
            <Text style = {defaultStyle? styles.style1:styles.style2}>
                Virgil
            </Text>
            <Button 
            title = 'Change Default Style'
            onPress={()=> setDefaultStyle(!defaultStyle)}
            />
            </View>
        </SafeAreaView>
      
    </View>
  )
}

export default DynamicStyle;



const styles = StyleSheet.create({

  container: {

    ustifyContent: "center",

    alignItems: "center",

    flex: 1,

    margin: 10,

  },

  style1: { fontSize: 20 },

  style2: { fontSize: 35, color: "red" },

});
