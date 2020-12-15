import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,Button} from 'react-native';
import MaterialIcon from "react-native-vector-icons";

export default function AddCart({item,presshamdler,submitHandler}) {

    return (
        <View>
            {/* <Image /> */}
            <View>
                <Text>hello cart</Text>
               {/* <Text>{item.name}</Text>
               <Text>{item.price}</Text>
               <MaterialIcon name="plus" size={18} color="#333" onPress={submitHandler}/>
               <></>
               <MaterialIcon name="delete" size={18} color="#333" onPress={submitHandler}/> */}
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    item:{
        padding:10,
        flexDirection:'column',

    },
    itemText:{
        marginLeft:10,
    }
})
