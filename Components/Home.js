import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList,Button,ScrollView} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Card from './Shared/Card';
import CartItems from './Cart/CartItems';

export default function Home({navigation}) {
    const [pizza,setPizza]=useState([
        {src:require('./Assets/images/pizza1.jpg'),name:'Chicken Hawaiian.',price:30,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:1},
        {src:require('./Assets/images/pizza2.jpg'),name:'MEAT DELUXE',price:28,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:2},
        {src:require('./Assets/images/pizza3.jpg'),name:'CHICKEN MACON BBQ',price:10,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:3},
        {src:require('./Assets/images/pizza4.jpg'),name:'beef pepperoni plus',price:20,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:4},
        {src:require('./Assets/images/pizza5.jpg'),name:'CHEESE BURGER',price:18,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:5},
        {src:require('./Assets/images/pizza6.jpg'),name:'ROAST VAG & FETA',price:15,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:6},
        {src:require('./Assets/images/pizza7.jpg'),name:'VEG FEAT',price:12,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:7},
        {src:require('./Assets/images/pizza8.jpg'),name:'SPICY BOEREWORS',price:13,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:8},
    ])

// const PressHandler=(id)=>{
//     setPizza((delPizza)=>{
//         return delPizza.filter(pizza=>pizza.id !=id)
//     })
// }
//     const submitHandler=(name)=>{
//         //add to cart
//         setPizza((src)=>{
//             return[
//                 {src:src,id:Math.random().toString()},
//                 ...pizza
//             ]
//         })
//     }
    return (
        <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
        {/* <CartItems  submitHandler={submitHandler} /> */}
        <ScrollView style={styles.scrollView}>
             <View style={styles.topHeader}>
             <Image
              style={{width:120,height:90,margin:10}}
            source={require('./Assets/images/pizza7.jpg')}
             />
             <View style={styles.topText}>
             <Text style={styles.textHeader}>Margarita with Tomatos</Text>
             <Text>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             </Text>

            <View style={styles.topButton}>
            <TouchableOpacity style={styles.cartBtn} onPress={()=>navigation.navigate('AddCart')}>
                        <Text style={styles.cartText}>Add to cart</Text>
          </TouchableOpacity>
            </View>
            
             </View>
             </View>
             <View style={styles.mainItems}>
                 <Text style={styles.TodaySpecial}>Today Special</Text>
                 <View style={styles.mainProduscts}>
                     <FlatList
                        numColumns={2}
                        keyExtractor={(item)=>item.id.toString()}
                        data={pizza}
                        renderItem={({item})=>(
                            <TouchableOpacity onPress={()=>navigation.navigate('ItemInfo',{item}) }>
                                <Card>
                                    <View style={styles.items}>
                                        <Image source={item.src} style={styles.images}></Image>
                                          <Text style={styles.itemText}>{item.name}</Text>
                                          <Text style={styles.itemText}>$ {item.price}</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>

                        )}
                     />
                    
                  </View>
             </View>
             </ScrollView>
            </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#f0f2f5',
        justifyContent:'center',
        alignItems:'center'
    },
    subContainer:{
        height:'100%',
        width:'100%',

    },
    TextContainer:{
        borderWidth:1,
        borderColor:'#bbb',
        marginLeft:15, 
    },
    textHeader:{
        fontSize:20,
        margin:5

    },
    topText:{
        width:"60%",
        textAlign:'right'
    },
    topHeader:{
    flexDirection:"row",
     width:"95%",
     margin:10,
     padding:10,
     borderRadius:20,
     backgroundColor:'#FFB8DE',
    },
    cartBtn:{
        backgroundColor:"black",
        margin:2,
        padding:15,
        borderRadius:30,
 
     },
     cartText:{
        textAlign:'center',
        color:'#ffffff'
     },
    topButton:{
        marginTop:5,
        width:"60%",
        textAlign:'center',
    },
    mainItems:{
        margin:10, 
        
    },
    mainContainer:{
        paddingTop:5,
    },
    mainProduscts:{
        // marginLeft:10, 
        // marginRight:10, 
    },
    TodaySpecial:{
     padding:5,
     fontSize:20,
     fontWeight:'100'
    },
    images:{
        width:124,
        height:90,
        margin:1,
        // aspectRatio: 0.5,
    },
    itemText:{
        width:100,
        height:40,
        marginLeft:10,
        marginRight:10,
    },
    items:{
        paddingLeft:20,
        paddingRight:20,
    },
    
})
