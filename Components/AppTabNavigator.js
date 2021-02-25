

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DonaterScreen from '../screens/DonaterScreen';
import RequesterScreen from '../screens/RequesterScreen';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator';


export  const AppTabNavigator = createBottomTabNavigator({
    DonaterScreen:{screen:AppStackNavigator},
    RequesterScreen:{screen:RequesterScreen},
  });