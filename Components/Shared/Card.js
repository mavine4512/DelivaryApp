import React from 'react';
import {StyleSheet,View} from 'react-native';

export default function Card (props){
    return(
        <View style={styles.card}>
        <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        elevation:2,
        borderRadius:6,
        // backgroundColor:'#fff',
        shadowColor:'#333',
        // shadowOffset:{width:1,height:1},
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:2,
        marginVertical:2
    },
    cardContent:{
    alignItems:'center'
    },
})