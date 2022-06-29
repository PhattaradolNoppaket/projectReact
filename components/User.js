import { View, Text } from 'react-native'
import React from 'react'

const User = () => {
    const users = [
        {id:1,name:"John"},
        {id:2,name:"Mary"}
    ];
  return (
    <View>
     
      {
        users.map((users,index)=>{
            return <Text key={users.id}>{index+1}. {users.name}</Text>
        })
      }
    </View>
  )
}

export default User