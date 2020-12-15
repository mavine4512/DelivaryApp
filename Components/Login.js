import React,{Component} from  'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Text,StyleSheet,TextInput, TouchableOpacity,StatusBar} from 'react-native';

const userInfor = {username: 'admin',password:'admin123'};

export default class Login extends Component{
    static navigationOptions={
        header:"null"
    }
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                backgroundColor='#1e90ff'
                barStyle='light-content'/>

                <Text style={styles.welcome}>LogIn</Text>

                 <TextInput style={styles.input} placeholder='Username'
                 onChangeText={(username)=>this.setState({username})}
                 value={this.state.username}
                 autoCapitalize='none'/>

                <TextInput style={styles.input} placeholder='Password'
                 onChangeText={(password)=>this.setState({password})}
                 value={this.state.password}
                 autoCapitalize='none'/>

                 <View style={styles.btnContainer}>
                     <TouchableOpacity style={styles.userBtn} onPress={this._login}>
                        <Text style={styles.btnLogin}>Login</Text>

                     </TouchableOpacity>
                     <Text style={styles.Register}
                     onPress={()=>this.props.navigation.navigate('Registration')}>
                         Not Yet  <Text style={styles.btnRegister}>Register?</Text>

                     </Text>
                 </View>

            </View>
        )
    }
    _login=async()=>{
        if(userInfor.username === this.state.username && userInfor.password === this.state.password){
            await AsyncStorage.setItem('isLoggedIn','1');
            this.props.navigation.navigate('Home');
        }else{
            alert('username or password is  incorrect')
        }
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1e90ff',
        justifyContent:'center',
        alignItems:'center'
    },
    welcome:{
        textAlign:'center',
        margin:20,
        fontSize:30,
        color:'#fff',
        fontFamily:'DoncingScript-Bold'
    },
    input:{
       backgroundColor:'#fff',
       padding:10,
       marginBottom:10,
       width:"90%"
    },
    btnContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        width:'90%',
  
    },
    userBtn:{
       backgroundColor:'#FFD700',
       margin:2,
       padding:15,
       borderRadius:30,

    },
    btnLogin:{
        fontSize:18,
        textAlign:'center',
        color:'#fff'
    },
    Register:{
        paddingTop:35,
        textAlign:'center'
    },
    btnRegister:{
        color:'green'
    }
})