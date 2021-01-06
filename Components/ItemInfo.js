import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,StatusBar} from 'react-native';

import {  useDispatch } from 'react-redux';
import { additem } from './Reducer/moviesApp';


export default function ItemInfo({route,navigation}) {
    const {item}= route.params;

    // console.log(item,'hello')
    const dispatch = useDispatch()

    const addItem = item => {
        console.log("...",item)
        dispatch(additem(item))
    }
   
  
 return(
    <View style={styles.container}>
        <StatusBar backgroundColor='#5499D8' barStyle="light-content"/>
        <View style={styles.contente}>
           <Image style={styles.img} source={{uri: item.Poster}}/>
            <Text style={styles.text}>{item.Title}</Text>
            <Text style={styles.text}>{item.Year}</Text>
           <Text style={styles.text}>{item.Type}</Text>
        </View>

            <View style={styles.bottomButton}>
               <TouchableOpacity  onPress={()=>{
                   console.log("item",item)
                   addItem(item)
                   navigation.navigate('Library')
                   
                   }}>
                        <Text style={styles.LibraryText}>Add to library</Text>
              </TouchableOpacity>
            </View>
    </View>
 )
   
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor:'#f0f2f5',

    },
content:{
       paddingLeft:30,
       padding:10

    },
 img:{
    margin:10,
    width:260,
    height:360,
    },
text:{
    textTransform: 'uppercase',
    fontSize:14,
    color:'#0B0B0B',
    fontFamily:'sans-serif',
    },
bottomButton:{
    backgroundColor: '#5499D8',
    borderRadius:30,
    padding:15,
    marginTop:20,
},
LibraryText:{
    textAlign:'center',
    color:'#ffffff',
    fontSize:14,
    fontWeight: "bold",
},
   
})
