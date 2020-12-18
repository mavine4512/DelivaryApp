import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import Card from './Shared/Card';
import LottieView from 'lottie-react-native';

export default function Home({navigation}) {
    // const [photos,setPhotos]=useState([
    //     {src:require('./Assets/images/BatIcon.png'),name:'Chicken Hawaiian.',price:30,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:1},
    //     {src:require('./Assets/images/batman.png'),name:'MEAT DELUXE',price:28,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:2},
    //     {src:require('./Assets/images/batmanc.png'),name:'CHICKEN MACON BBQ',price:10,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:3},
    //     {src:require('./Assets/images/BatmanForever.png'),name:'beef pepperoni plus',price:20,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:4},
    //     {src:require('./Assets/images/BatmanReturns.png'),name:'CHEESE BURGER',price:18,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:5},
    //     {src:require('./Assets/images/movie.png'),name:'ROAST VAG & FETA',price:15,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',map:'geagoraphical location',id:6},
    // ])

// const PressHandler=(id)=>{
//     setPizza((delPizza)=>{
//         return delPizza.filter(pizza=>pizza.id !=id)
//     })
// }
//     const submitHandler=(name)=>{
//         //add to cart
//         setPizza((products)=>{
//             return[
//                 {name:name,id:Math.random().toString()},
//                 ...products
//             ]
//         })
//     }

  const [movies,setMovies]=useState([])
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('https://www.omdbapi.com/?s=Batman&page=1&apikey=b001395c');
       response = await response.json();
    //   console.log(response.Search,'---hello---')
      setMovies(response.Search)
    }

    fetchMyAPI()
  }, [])

    return (
        <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
        <ScrollView style={styles.scrollView}>
        <View >
            <Text style={styles.headerText}>Comingsoon.</Text>
            </View>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >
            
            <View style={styles.topHorizontal}>
                
               <TouchableOpacity>
               <View style={styles.localImg}>
                   <Image style={styles.horizontalImg} source={require('./Assets/images/BatIcon.png')}/>
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.localImg}> 
               
               <Image style={styles.horizontalImg}  source={require('./Assets/images/batman.png')}/> 

               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.localImg}> 
                   <Image style={styles.horizontalImg}  source={require('./Assets/images/batmanc.png')}/>
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.localImg}> 
                   <Image style={styles.horizontalImg}  source={require('./Assets/images/movie.png')}/>
               </View>
               </TouchableOpacity>
               </View>
            </ScrollView>
            <View style={styles.descriptionText} >
                   <Text style={styles.descriptionHead}>13 Reasons why</Text>
                   <Text style={styles.descriptionSubHead}>Season 4 to 9</Text>
                   <Text style={styles.descriptionBody}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   </Text>
                   <TouchableOpacity style={styles.descriptionTouchable}>
                   <View style={{paddingLeft:10,paddingRight:10}}>
                   <LottieView source={require('./Assets/notification.json')} autoPlay loop></LottieView>
                   </View>
                       <Text style={{color:'#F8F7F7',paddingLeft:10,paddingRight:5,fontWeight:'bold'}}>Activate</Text>
                       <Text style={{color:'#F80404',paddingRight:10,fontWeight:'bold'}}>Notification</Text>
                   </TouchableOpacity>
               </View>
             <View style={styles.mainItems}>
                 <Text style={styles.TodaySpecial}> continue selecting.</Text>
                 <View style={styles.mainProduscts}>
                     <FlatList
                        numColumns={2}
                        keyExtractor={(item)=>item.imdbID.toString()}
                        data={movies}
                        renderItem={({item})=>(
                           
                            <TouchableOpacity onPress={()=>navigation.navigate('ItemInfo',{item}) }>
                        
                                <Card>
                                    <View style={styles.items}>
                                
                                        <Image source={{uri: item.Poster}}style={styles.images}/>
                                        <Text style={styles.itemTitle}>{item.Title}</Text>
                                        
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
    localImg:{
        width:280,
        height:150,
        alignItems:'center',
    },
    horizontalImg:{
        width:270,
        height:150,
        borderRadius:10,
    },
    headerText:{
      padding:5,
      fontSize:14,
      fontWeight:'bold',
      textTransform: 'uppercase',
      marginLeft:10, 
    },
    topHorizontal:{
    flexDirection:"row",
     width:"100%",
     margin:10,
     alignItems:'center',
    },
    imagesTopContainer:{
        paddingLeft:20,
        paddingRight:20,
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
     textTransform: 'uppercase',
     fontSize:14,
     fontWeight: "bold",
     
    },
    images:{
        width:125,
        height:149,
    },
    itemTitle:{
        width:100,
        marginLeft:10,
        marginRight:10,
    },
   
    items:{
        paddingLeft:20,
        paddingRight:20,
        // margin:10,
        // borderColor:'#bbb',
        // borderRadius:12,
     },
     descriptionHead:{
        textTransform: 'capitalize',
        fontSize:16,
        fontFamily:'SFUIDisplay-Bold',
        color:'#302F2E'
     },
     descriptionSubHead:{
        textTransform: 'uppercase',
        fontSize:12,
        color:'#565453',
        fontFamily:'sans-serif',

     },
     descriptionBody:{
        fontSize:13,
        fontFamily:'sans-serif',
        paddingTop:8,
        paddingBottom:8,
        lineHeight: 18,
        color:'#474545',
     },
     descriptionTouchable:{
        borderWidth:1,
        borderRadius:12,
        backgroundColor:'#282727',
        width:180,
        textAlign:'center',
        color:'#F3EDED',
        flexDirection:'row',
        padding:2,
     },

     descriptionText:{
        marginLeft:15,
        marginRight:15,
     },
})
