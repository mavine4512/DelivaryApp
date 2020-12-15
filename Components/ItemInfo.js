import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,Button,ScrollView,TouchableOpacity } from 'react-native';

export default function ItemInfo({route,navigation}) {
    const {item}= route.params;
    return (
        <View style={styles.container}>
        <View style={styles.contente}>
        <ScrollView style={styles.scrollView}>
        <Image style={styles.img} source={JSON.stringify(item.src)}></Image>
             <Text style={styles.titleTop}>{JSON.stringify(item.name)}</Text>
             <Text style={styles.topText}>$ {JSON.stringify(item.price)}</Text>
             <Text style={styles.textDescription}>{JSON.stringify(item.description)}</Text>
       
          <Text style={styles.map}>{JSON.stringify(item.map)}</Text>

          <View style={styles.footerItem}>
            <View>
            
     <View style={styles.textItems}>

     <Text style={styles.textTitle}>{JSON.stringify(item.name)}</Text>
            <Text style={styles.text}>$ {JSON.stringify(item.price)}</Text>
     </View>
            </View>
            <View style={styles.bottomButton}>
            <TouchableOpacity style={styles.cartBtn} onPress={()=>navigation.navigate('AddCart')}>
                        <Text style={styles.cartText}>Order Now</Text>
          </TouchableOpacity>
            </View>
                </View> 
        </ScrollView> 
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    content:{
       paddingLeft:30,
       padding:10

    },
    footerItem:{
        flex:1,
        backgroundColor:'#000',
        justifyContent:'space-between',
        width:'100%',
        padding:10,
        marginTop:20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    scrollView: {
        width:'100%',
        flex:1,
      },
   img:{
    margin:25,
    width:'80%',
    height:180,
  
    },
   
     text:{
        padding:15,
        marginLeft:30,
        marginRight:30,
        color:'white',    
    },
    textTitle:{
     color:'white',
     fontSize:15,
     fontWeight:'100',
     padding:9,
    },
    textItems:{
        flexDirection:"row",
        width:'80%',
        padding:10,
    },
    textDescription:{
        color:'#979797', 
        fontSize: 14,
        lineHeight: 30,
        padding:20,
    },
    topText:{
        fontSize:14,
        padding:10
    },
    titleTop:{
      padding:10,
      fontSize:25,
      fontWeight:'100'
    },
    // lottieView:{
    //     flexDirection:"column",
    //     width:'80%',
    //     height:20,
    // },
    cartBtn:{
        backgroundColor:"gold",
        margin:2,
        padding:15,
        borderRadius:30,
 
     },
     cartText:{
        textAlign:'center',
        color:'#ffffff'
     },
     bottomButton:{
        alignItems: 'center',
        marginTop:5,
        marginRight:30,
        textAlign:'center',
    },
   
})
