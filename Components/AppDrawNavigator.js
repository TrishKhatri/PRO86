import {createDrawerNavigator} from 'react-navigation-drawer'
import * as  React from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import { AppTabNavigator } from './AppTabNavigator';

import bookRequest from '../screens/RequesterScreen';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';



export const AppDrawNavigator = createDrawerNavigator({
    'Home' : {
        screen : AppTabNavigator,
        
        },
      
   'Setting' : {
        screen : SettingScreen,
      } 
      
      
      },
       
      
      {
        contentComponent : CustomSideBarMenu,
      },
    
      
      {
        initialRouteName : 'Home'
      })
  