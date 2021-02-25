import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,KeyboardAvoidingView,FlatList } from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class DonaterScreen extends React.Component {

    constructor(){
        super()

        this.state={
            requestedBooksList:[],
        }
        this.requestRef=null;
    }

    getRequestedBooksList =()=>{ this.requestRef = db.collection("Requests") .onSnapshot((snapshot)=>
    { var requestedBooksList = snapshot.docs.map((doc) => doc.data())
         this.setState({ requestedBooksList : requestedBooksList }); })
        
        console.log(this.state.requestedBooksList);
        }





    componentDidMount(){
    this.getRequestedBooksList();
}
      render(){
  
        
    return (
      <View>
        <Text>DonaterScreen</Text>
      
      <View>
          {this.state.requestedBooksList.length===0
          ?(<View>
           <Text>List Of Requested Books</Text>

          </View>)
          : (<FlatList data={this.state.requestedBooksList}
             keyExtractor={(item,index)=>index.toString()} 
             renderItem={({item,i})=>(
                 <View>
            <Text style={{color:"blue",fontSize:"large",marginTop:30}}>{item.BookName}</Text>
             <Text style={{color:"blue",fontSize:"large"}}>{item.EmailId}</Text>
             <Text style={{color:"blue",fontSize:"large"}}>{item.Reason}</Text>
             <Text style={{color:"blue",fontSize:"large"}}>{item.requestId}</Text>

             <TouchableOpacity style={{borderWidth:4,borderRadius:10,borderColor:"black",
             height:25,width:100,backgroundColor:"black"}} 
             onPress={(item)=>{this.props.navigation.navigate("ReceiverDetailScreen",{"details":item})}}>
                 <Text style={{color:"white",alignItems:"center",alignContent:"center"}}>Donate</Text>
             </TouchableOpacity>
                </View>
             )}>
         
              
          </FlatList>)
      }        
      </View>
   
      </View>
    );
  }
  }
  
