import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';

export default function ItemInfo({route,navigation}) {
    const {item}= route.params;

    const submitHandler=(setPizza)=>{
        //add to cart
        setPizza((products)=>{
            return[
                {name:name,id:Math.random().toString()},
                ...products
            ]
        })
    }

  
 return(
    <View style={styles.container}>
        <View style={styles.contente}>
          <Image style={styles.img} source={{uri: item.Poster}}/>
          <Text style={styles.text}>{item.Title}</Text>
         <Text style={styles.text}>{item.Year}</Text>
         <Text style={styles.text}>{item.Type}</Text>
        </View>
        <View style={styles.bottomButton}>
            <TouchableOpacity onPress={()=>navigation.navigate('Library',{item},submitHandler)}>
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
    backgroundColor:'#009387',
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
