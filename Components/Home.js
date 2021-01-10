import React,{useEffect, useState} from 'react';
import {View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    StatusBar,
    Dimensions,
    Alert
} from 'react-native';
import {Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import Card from './Shared/Card';
import notification from './../Utilities/notificationServices';

import { useSelector, useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'


const {width}=Dimensions.get("window")
const image1=require('./Assets/images/BatIcon.png')
const image2=require('./Assets/images/batman.png')
const image3=require('./Assets/images/batmanc.png')
const image4=require('./Assets/images/BatmanForever.png')
const image5=require('./Assets/images/BatmanReturns.png')
const image6=require('./Assets/images/movie.png')

const { width: screenWidth } = Dimensions.get('window')

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
const [images,setImages]=useState([
image1,image2,image3,image4,image5,image6
])
  const onRegister=(Token)=>{
     
    console.log("OnRegister Called",Token) 
  }

  const onAction=(Notification)=>{
 
    console.log("onAction Called")
  }

  const onNotification=(Notification)=>{
 
    console.log("onNotification Called",Notification)
  }

  const onError=(error)=>{
    console.log("onError Called")
  }

  const Notificationservice=new notification(onRegister,onAction,onNotification,onError)

  const [movies,setMovies]=useState([])
  useEffect(() => {
    async function fetchMyAPI() {
        try{
            let response = await fetch('https://www.omdbapi.com/?s=Batman&page=1&apikey=b001395c');
            let data = await response.json();
        
           setMovies(data.Search)
            // console.log(response,'---hello---')
    
        }catch(error){
            Alert.alert("Error try again")
        }
   
      
   
    }

    fetchMyAPI()
  }, [])

  const dispatch = useDispatch()

  const _renderItem=({item})=>{ 

    return(
        <Image source={item}
         width={"100%"} 
         height={100} 
         borderRadius={16}  
         resizeMode={'contain'} 
         alignItems={'center'}
        justifyContent={ 'center'}
       
        />
  )}

    return (
        <View style={styles.mainContainer}>
               <StatusBar backgroundColor='#5499D8' barStyle="light-content"/>
        <View style={styles.subContainer}>
        <ScrollView style={styles.scrollView}>
        <View >
            <Text style={styles.headerText}>Comingsoon.</Text>
            </View>
            <Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={images}
                renderItem={_renderItem}
                hasParallaxImages={true}
            />      
           
            <View style={styles.descriptionText} >
                   <Text style={styles.descriptionHead}>13 Reasons why</Text>
                   <Text style={styles.descriptionSubHead}>Season 4 to 9</Text>
                   <Text style={styles.descriptionBody}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   </Text>
                   <View >
                   <TouchableOpacity style={styles.descriptionTouchable}onPress={()=>{Alert.alert('Notification activated')}}>
                   <View style={{paddingLeft:10,paddingRight:10}}>
                   <LottieView source={require('./Assets/notification.json')} autoPlay loop></LottieView>
                   </View>
                       <Text style={{color:'#F8F7F7',paddingLeft:10,paddingRight:5,fontWeight:'bold'}}>Activate</Text>
                       <Text style={{color:'#F80404',paddingRight:10,fontWeight:'bold'}}>Notification</Text>
                   </TouchableOpacity>
                   {/* <TouchableOpacity  onPress={()=>{navigation.navigate('Library')}}>
                        <Text style={styles.Library}>Library</Text>
              </TouchableOpacity> */}
                   </View>
               </View>
             <View style={styles.mainItems}>
                 <Text style={styles.TodaySpecial}> continue selecting.</Text>
                 <View style={styles.mainProduscts}>
                     <FlatList
                        numColumns={2}

                        keyExtractor={(item)=>item.imdbID.toString()}
                        data={movies}
                        renderItem={({item})=>(
                            <TouchableOpacity 
                            onPress={()=>{
                               navigation.navigate('ItemInfo',{item})
                             }}
                            >
                                <Card style={styles.items}>
                                    <Image source={{uri: item.Poster}} resizeMode={'cover'}  style={styles.images}/>
                                        <Text style={styles.itemTitle }
                                        ellipsizeMode='tail' numberOfLines={2}>{item.Title}</Text>
                                </Card>
                            </TouchableOpacity>
                        )}
                     />  
                  </View>
             </View>
             </ScrollView>
             <Footer >
          <FooterTab backgroundColor='#5499D8'>
            <Button  vertical onPress={()=>navigation.navigate('Home')}>
              {/* <Badge><Text>2</Text></Badge> */}
              <Icon name="home" />
              <Text style={styles.menuText}>Home</Text>
            </Button>
            
            <Button  vertical onPress={()=>{navigation.navigate('Library')}}>
              {/* <Badge ><Text>51</Text></Badge> */}
              <Icon name="bookmarks" />
              <Text style={styles.menuText}>Library</Text>
            </Button>
            <Button  vertical onPress={()=>{navigation.navigate('AboutUs')}} >
              <Icon  name="person" />
              <Text style={styles.menuText}>About us</Text>
            </Button>
            <Button vertical>
              <Icon name="settings" />
              <Text style={styles.menuText}>Setting</Text>
            </Button>
          </FooterTab>
        </Footer>
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
    localImages:{
        alignItems: 'center',
    },
    
    horizontalImg:{
        // width:285,
        height:150,
        borderRadius:14,
    },

    Topitems:{
     flexDirection:'row',     
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
     marginLeft:20,
     marginRight:20,
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

    TodaySpecial:{
     textTransform: 'uppercase',
     fontSize:14,
     fontWeight: "bold",
     
    },
    images:{
        width:null,
        height:149,
        alignSelf:'stretch'
    },
    itemTitle:{
        marginLeft:10,
        marginRight:10,
    },
   
    items:{
        paddingBottom:10
    ,
    width:width*.46,
        margin:width*0.25,
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
     menuText:{
         color:'#fff'
     },

     descriptionBody:{
        fontSize:15,
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
     
     Library:{
        textAlign:'center',
        color:'#ffffff',
        fontSize:14,
        fontWeight: "bold",
        backgroundColor:'#009387',
        borderRadius:30,
        padding:9,
        marginTop:20,
     },
     
})
