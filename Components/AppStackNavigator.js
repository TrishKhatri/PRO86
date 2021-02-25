import * as  React from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import ReceiverDetailScreen from '../screens/ReceiverDetailScreen';
import DonaterScreen from '../screens/DonaterScreen';

export  const AppStackNavigator = createStackNavigator({
    DonaterScreen:{screen:DonaterScreen},
    ReceiverDetailScreen:{screen:ReceiverDetailScreen},
  },
  
  {
    initialRouteName : 'DonaterScreen'
  }
  );
