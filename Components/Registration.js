import React,{Component} from  'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View,Text,StyleSheet,TextInput, TouchableOpacity,StatusBar} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

const userInfor={username: '',password: '',email:'',phone:''};


export default class Login extends Component{
    static navigationOptions={

        header:"null"
    }
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            phone:'',
            email:''
        }
    }

    componentDidMount(){
        this.setState({
            pickerData: this.phone.getPickerData
        })
    }
    
    onPressFlag(){
        this.myCountryPicker.open()
    }

    selectCountry(country){
        this.phone.selectCountry(country.iso2)
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

                 <CountryPicker
                ref={ref => { this.countryPicker = ref; }}
                onChange={(phone)=> this.selectCountry({phone})}
                translation='KES'
                cca2={this.state.cca2}
                />
                  <PhoneInput
                  style={styles.input}
                  placeholder='Phone number'
                  value={this.state.phone}
                  ref={(ref) => { this.phone = ref; }}
                  onPressFlag={this.onPressFlag}
                //   countryHint={{name: 'Kenya', cca2: 'KES', callingCode:"254"}}
               />
                 <TextInput style={styles.input} placeholder='Password'
                 onChangeText={(password)=>this.setState({password})}
                 value={this.state.password}
                 autoCapitalize='none'/>

                 <View style={styles.btnContainer}>
                     <TouchableOpacity style={styles.userSignup} onPress={this.signup}>
                        <Text style={styles.signup}>Regisrer</Text>
                     </TouchableOpacity >

                     <TouchableOpacity style={styles.userBtn}
                     onPress={()=>this.props.navigation.navigate('Login')}>
                      <Text style={styles.btnText}>Back To Login</Text>

                     </TouchableOpacity>
                 </View>
            
           </View>
        )
    }

    //  signup = async (value) => {
    //     try {
    //       await AsyncStorage.setItem('@storage_Key', value)
    //     } catch (e) {
    //       // saving error
    //       alert('username or password is  incorrect')
    //     }
    //   }
      
    _signup=async(value)=>{
        if(userInfor.username === this.state.username && userInfor.password === this.state.password){
            await AsyncStorage.setItem('isRegistered','1');
            this.props.navigation.navigate('Login');
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
    btnText:{
       fontSize:18,
       textAlign:'center'

    },
    userSignup:{
        backgroundColor:'#008000',
        margin:2,
        padding:15,
        borderRadius:30,
    },
    signup:{
        textAlign:'center',
        fontSize:18,
        color:'#fff'
    },
    userBtn:{
        backgroundColor:'#ffd700',
        margin:2,
        padding:15,
        borderRadius:30,
    }
})