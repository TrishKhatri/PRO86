import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,KeyboardAvoidingView,FlatList } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class ReceiverDetailScreen extends React.Component{



    constructor(){
        super()
        alert(this.props.navigation.getParam("details")["BookName"])
        this.state={
        UserId:firebase.auth().currentUser.Email,
        UserName:'',
        ReceiverId:this.props.navigation.getParam("details")["EmailId"],
        BookName:this.props.navigation.getParam("details")["BookName"],
        Reason:this.props.navigation.getParam("details")["Reason"],
        ReceiverName:"",
        ReceiverContact:"",
        ReceiverAddress:"",

        }
    }

    getReciverDetails(){
  db.collection("Users").where("Email", "==",this.state.ReceiverId).get()
 .then(snapshot=>{snapshot.forEach(doc => {
  this.setState({
      ReceiverName:doc.data().FirstName,
      ReceiverContact:doc.data().ContactNumber,
      ReceiverAddress:doc.data().Address,

     
 })});})
    }
    
    
componentDidMount(){
    this.getReciverDetails();
}


    render(){

   

    return(




<View>

    <Text>{this.state.BookName}</Text>

</View>

    )

    }

}