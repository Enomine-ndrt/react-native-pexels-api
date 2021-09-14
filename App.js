import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text,Image,StyleSheet} from 'react-native';
import pexelsLogo from "./assets/Pexels.jpg";
import HomeScreen from './screens/HomeScreens';
import ImageScreen from './screens/ImageScreen';

const Stack = createNativeStackNavigator();

export default function App() {

const [openSearch, setOpenSearch] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="HomeScreen" 
        options={{ 
          headerLeft: () => <Image source={pexelsLogo} style={styles.logo}/>,
          headerRight:()=>(
            <Text style={{ color:'#fff',fontSize:19 }}
            onPress={()=>setOpenSearch(!openSearch)}
            >{openSearch ? "Close":"Search"}</Text>
          ),
          title:"Pexel App",
          headerTintColor:'#ffffff',
          headerTitleStyle:{
            fontWeight:'bold',
          },
          headerStyle:{
            backgroundColor:'#0d0d0d'
          }
         }}
        >
          {(props)=><HomeScreen {...props} openSearch={openSearch}/>}
        </Stack.Screen>
        <Stack.Screen name="ImageScreen" component={ImageScreen}
        options={{ 
          title:"Pexel App",
          headerTintColor:'#ffffff',
          headerTitleStyle:{
            fontWeight:'bold',
          },
          headerStyle:{
            backgroundColor:'#0d0d0d'
          }
         }}  
      />
      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo:{
    width: 37,
    height: 37,
    marginEnd:5,
    borderRadius:5,
  },
});