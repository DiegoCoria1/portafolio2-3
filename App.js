import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View, Image, Alert, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native';
import { Pressable } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Image source={{ uri: 'https://cdn.pixabay.com/photo/2017/09/01/00/16/png-2702697_640.png'}} style={{
        width:300,
        height:290,
      }}></Image>
      <View style={{padding:3}}></View>
      <LinearGradient
        colors={['rgba(255,255,0,0.8)', 'transparent']}
        style={styles.background}
      />
      <Text style={styles.text}>Ejercicio 3</Text>
      <Text style={styles.smalltext}>Mi gata se llama Yumi</Text>
      <View style={{padding:3}}></View>
      <StatusBar style="auto"/>
      <Button
      title='Aprete Aquí'
      color="blue"
      onPress={() => Alert.alert('Notificación','Buenas tardes')}/>
      <View style={{padding:3}}></View>
      <TouchableHighlight
      onPress={() => Alert.alert('Notificación','Buenas tardes')}
      underlayColor={'blue'}
      style={{padding:10, backgroundColor:'aqua', borderRadius:5}}
      >
        <Text style={{color:"white"}}>Presione aquí</Text>
      </TouchableHighlight>
      <View style={{padding:3}}></View>
      <Pressable
      onPress={() => Alert.alert('Notificación','Buenas tardes')}
      style={({ pressed }) => [
        {padding:10, borderRadius:5, backgroundColor: pressed ? 'blue':'aqua'}
      ]} 
      ><View>
      </View>
       <Text style={{color:"white"}}>Presione aquí</Text> 
      </Pressable>
      <View style={{padding:3}}></View>
    </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
    text: {
      color:'black',
      fontSize: 20,
      fontWeight: '600'
  },
  smalltext: {
    color:'black',
    fontSize: 12,
    fontWeight: '600'
},
});
