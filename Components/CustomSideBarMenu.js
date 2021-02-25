import * as  React from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView, Image,TextInput, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';


export default class CustomSideBarMenu extends React.Component{
    constructor(props){
      super(props);
      this.state={
        userId: "",
        image: "#",
        name: "",
        docId: "",
    
    
      }
    }
    render(){
        return (
            <View>
              {/* <Avatar   rounded size="small" title="avatar"
              source={{uri:this.state.image}}
              activeOpacity={0.7}  /> */}
            
            <View style={styles.drawerItemsContainer}>
              <DrawerItems {...this.props} />
              
            </View>
                <View style={styles.logOutContainer}>
              <TouchableOpacity style={styles.logOutButton}
              onPress = {() => {
                  this.props.navigation.navigate('WelcomeScreen')
                  firebase.auth().signOut()
              }}>
                <Text>Log Out</Text>
              </TouchableOpacity>
            </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })