import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import DonaterScreen from './screens/DonaterScreen';
import RequesterScreen from './screens/RequesterScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator} from 'react-navigation';
import {AppTabNavigator} from './Components/AppTabNavigator';
import {AppDrawNavigator} from './Components/AppDrawNavigator';


export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
    
      <AppContainer/>
    </View>
  );
}
}


const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  AppTabNavigator:{screen:AppTabNavigator}, 
  AppDrawNavigator:{screen:AppDrawNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
