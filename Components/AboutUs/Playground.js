import React, { Component } from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';

import MapView,{PROVIDER_GOOGLE, Marker,Callout,Polygon } from 'react-native-maps';


export default class PlayGround extends Component {
    state={
        coordinates:[
            {name:'1',latitude:-1.27102,longitude:36.90449},
            {name:'2',latitude:-1.26030,longitude:36.89603},
            {name:'3',latitude:-1.2659896295332462,longitude:36.910320886223715},
            {name:'4',latitude:-1.2603275603039736,longitude:36.90466150119816},
            {name:'5',latitude:-1.2457691756178624,longitude:36.88838630914798},
            {name:'6',latitude:-1.2648947811312896,longitude:36.88043177299087} 
        ]
    }
    render() {
        return (
            <View style={styles.container}>
             <View style={styles.TextTitle}>
                 <Text style={styles.TextHeader}>About us</Text>
             <Text style={styles.TextInfo}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             </Text>
             <Text style={styles.TextHeader}>Mission</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                    <Text style={styles.TextHeader}>vision</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
             </View>
            <MapView
             PROVIDER={PROVIDER_GOOGLE}
             style={styles.map}
              region ={{
                
                  latitude: -1.27102,
                  longitude: 36.90442,
                  latitudeDelta: 0.11, 
                  longitudeDelta: 0.35,
                   }}
                 >
         {
             this.state.coordinates.map(m=>{
                 return      <Marker
                 key={m.name}
                 coordinate={{ latitude :m.latitude , longitude : m.longitude }}
                //  image={require('../Assets/Icons/add.png')}
               />
             })
         }

                    </MapView>
                   
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:10,
    },
    TextHeader:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    },
    TextTitle:{ 
        paddingBottom:10,
    },
    TextInfo:{
        fontSize:14,
        fontFamily:'sans-serif',
    },
    map:{
        height:'50%'
    
    }
})