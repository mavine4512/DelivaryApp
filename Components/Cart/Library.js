import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,Button,ScrollView,FlatList} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import Card from '../Shared/Card';

export default function AddCart({route,presshamdler,navigation}) {
    const {item}= route.params;
    const [count, setCount] = useState(1);
    
    const PressHandlerDel=(id)=>{
        setPizza((delPizza)=>{
            return delPizza.filter(pizza=>pizza.id !=id)
        })
    }

    return (
        <ScrollView>
        <View style={styles.container}>
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
              <MaterialIcon name="delete" size={18} color="#ffd700" margin={10} 
              onPress={()=>navigation.navigate('Home',{item},
              presshamdler={PressHandlerDel}
              )
              }/>

                 {/* <Text style={styles.decrement} onPress={() => setCount(count -1)}>-</Text>
                      <Text style={styles.calcText}>{count}</Text> onPress={PressHandler}
                <Text style={styles.increment} onPress={() => setCount(count + 1)}>+</Text>
              */}
              </View>
            </Card>

        </View>
        </ScrollView>
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
    
})
