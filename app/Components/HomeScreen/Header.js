import { View, Text,Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import ask from'./../../assets/images/ask.png'
import { Entypo } from '@expo/vector-icons';
export default function Header() {
    const{isLoaded,isSignedIn,user}=useUser();
  return isLoaded&&(
    <View style={{padding:20}}>
      <View style={{justifyContent:'space-between',display:'flex',flexDirection:'row',}}>
      <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
        {/* <Image source={{uri:user?.imageUrl}}
        style={{width:50,height:50,borderRadius:99}}/> */}
        <Entypo name="menu" size={40} color='#23B100' />

      <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
        <Text style={{color:'black',fontSize:20,fontWeight: 'bold',}}>Hi</Text>
        <Text style={{color:'black',fontSize:20,fontWeight: 'bold',}}>{user?.firstName}</Text>
        </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
        <Image source={ask} style={{width:30,height:30}}/>
        {/* <Text style={{color:'green',fontSize:20,fontWeight: 'bold',}}>Hi</Text> */}
      </View>
    </View>
    </View>
  )
}
