import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity ,FlatList} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import Card from '../Shared/Card';
import Empty from './EmptyLibrary';
import { useSelector, useDispatch } from 'react-redux'
import { deleteitem } from '../Reducer/moviesApp'

export default function Library({route,PressHandlerDel,navigation}) {
    // const {item}= route.params;

    // const [count, setCount] = useState(1);
  
    // const items=[item]
    // const PressHandlerDel=(id)=>{
    //     setPizza((delPizza)=>{
    //         return delPizza.filter(pizza=>pizza.id !=id)
    //     })
    // }

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
                <Card>
                     <View style={styles.content}>
                         <Image style={styles.img} source={{uri: item.Poster}}/>
                         <Text style={styles.textTitle}>{item.Title}</Text>
                    </View>

                    <View style={styles.texts}>
                         <Text style={styles.text}>{item.Year}</Text>
                         <Text style={styles.text}>{item.Type}</Text>
                     </View>

                  <View style={styles.contentCalc}>
                        <MaterialIcon name="delete" size={18} color="#009387" margin={10} 
                        onPress={()=>{
                        deleteItem(item)
                        }}/>
    
                     {/* <Text style={styles.decrement} onPress={() => setCount(count -1)}>-</Text>
                          <Text style={styles.calcText}>{count}</Text>
                    <Text style={styles.increment} onPress={() => setCount(count + 1)}>+</Text> */}
                  
                   </View>

                </Card>
                
               )}
            
               />
            </View>
           )}

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      margin:5,
    },
    content:{
        flexDirection:'row',
        padding:20
    },
    item:{
        padding:10,
        flexDirection:'column',

    },
    textTitle:{
        marginLeft:10,
    },
    img:{
        width:40,
        height:55,
        
    },
    text:{
        // textAlign:'center',
        // paddingLeft:10,
        // paddingRight:10,  
    },
    texts:{
        paddingLeft:10,
        paddingRight:10, 
    },
    contentCalc:{
        flexDirection:'row',
        width:180,
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
