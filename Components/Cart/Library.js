import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity ,FlatList,Alert} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import Card from '../Shared/Card';
import Empty from './EmptyLibrary';
import { useSelector, useDispatch } from 'react-redux'
import { deleteitem } from '../Reducer/moviesApp'

export default function Library({route,navigation}) {
    // const {item}= route.params;


   const Message =()=>{ 
   
         Alert.alert("This is a video which is about to play on your phone.")
   }

     const items = useSelector(state =>{
     console.log("my state",state)
     return state.items
    } )

    const dispatch = useDispatch()
    const deleteItem  = item =>dispatch(deleteitem (item))

    return (
        <View style={styles.container}>
           {items.length=== 0?(
               <TouchableOpacity  onPress={()=>navigation.navigate('Home')
            }>
                <Empty/>
                 <Text style={styles.LibraryText}>countinue selecting?</Text>
             </TouchableOpacity>

           ):( 
               <View>
               <FlatList
               data={items}
               keyExtractor={(item)=>item.imdbID.toString()}
            // {...console.log(items,'working')}
               renderItem={({item})=>(
               
                    <View style={styles.contentCard}>
                     <View style={styles.content}>
                         <View style={styles.Image}>
                         <Image style={styles.img} source={{uri: item.Poster}}/>
                         </View>
                         <View>
                         <Text style={styles.textTitle}>{item.Title}</Text>
                         <View style={styles.text}>
                         <Text style={styles.textItems} >{item.Year}</Text>
                         <Text style={styles.textItems}>{item.Type}</Text>
                         </View>
                         <View style={styles.contentMaterialIcon}>
                        <View style={styles.materialIconDelete}>
                        <MaterialIcon name="delete" size={20} color="#D05434" 
                        onPress={()=>{
                        deleteItem(item)
                        }}/>
                        </View>
                        <View style={styles.materialIconVideo}>
                        <MaterialIcon  name={'ondemand-video'} size={20} color="#347ad0" 
                        onPress={()=>{Message()
                        }}
                        />
                        </View>
                        </View>
                         </View>
                    </View>
                   </View>            
               )}
            
               />
            </View>
           )}
         
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    content:{
        flexDirection:'row',
    },
    contentCard:{
        elevation:2, 
        borderRadius:6,
        height:190,
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:6,
        marginVertical:10,
        overflow:'hidden'

    },
    textTitle:{
        marginLeft:10,
    },
    Image:{
        width:120,
        height:190,
        borderWidth:1,
    
    },
    img:{
        width:120,
        height:190,
    },
    textItems:{
        paddingLeft:10,
    },

    text:{
        flexDirection:'row',
        paddingRight:10,  
    },
    texts:{
        paddingLeft:10,
        paddingRight:10, 
    },
    contentMaterialIcon:{
        flexDirection:'row',
        width:180,
        margin:10,       
    },
    materialIconDelete:{
        padding:10,
    },

    materialIconVideo:{
        padding:10,
    },

    LibraryText:{
        textAlign:'center',
        color:'#ffffff',
        fontSize:14,
        fontWeight: "bold",
        backgroundColor:'#009387',
        borderRadius:30,
        padding:15,
        marginTop:20,
    },
    decrement:{
        padding:5,
        marginLeft:20, 
        marginRight:20, 
        color:'#000',
        alignItems:'center',
        width:25,
        height:25,
        borderWidth:1,
        borderColor:'#bbb',
    },
    increment:{
        padding:5,
        marginLeft:20, 
        marginRight:20, 
        color:'#000',
        alignItems:'center',
        width:25,
        height:25,
        borderWidth:1,
        borderColor:'#bbb',
    }
    
})
