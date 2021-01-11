import React, { Component } from 'react'
import {View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import {addUser, getUser} from '../../model/data'
// import {logout} from '../../model/data'

export default class Settings extends Component {
    constructor(props) {
        super(props);
    }
   logOut(){
    // signOut().then(()=>{
    //     console.log('user loged out')
    //     this.props.navigation.navigate('Login');
    // })
    getUser().then(user=>{
        console.log(user,'working')
        if(user!=null){
    
            user.isLogged=false;
            addUser(user).then(r=>{
                console.log('user loged out')
                this.props.navigation.navigate('Login');
            }).catch(error=>{

            })
        }
    }).catch(error=>{
     Alert.alert("Error finding user")
    })
   
   }

    render() {
        return (
            <View  style={styles.Container}>
                <TouchableOpacity 
                    style={styles.signIn}
                    onPress={()=>{this.logOut()}}
                    icon="camera"
                    >    
                    <Text style={styles.logoutText}>LogOut</Text>
                    <Text style={styles.MoreText}>Clear local data and logout</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    Container:{
        flex:1
    },
    logoutText:{
        paddingTop:20,
        paddingLeft:15,
        fontWeight:'bold',
        fontSize:20,
    }, 
    MoreText:{
        paddingLeft:15,
        paddingTop:5,
        fontSize:12,
    },
})
