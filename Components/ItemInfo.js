import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,StatusBar,ScrollView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import {  useDispatch } from 'react-redux';
import { act } from 'react-test-renderer';
import { additem } from './Reducer/moviesApp';


export default function ItemInfo({route,navigation}) {
    const {item}= route.params;

    // console.log(item,'hello')
    const dispatch = useDispatch()

    const addItem = item => {
        console.log("...",item)
        dispatch(additem(item))
    }
    const [moviesDetails,setMoviesDetails]=useState([])
    useEffect(() => {
      async function fetchMyAPI() {
        let response = await fetch('https://www.omdbapi.com/?i='+item.imdbID+'&apikey=b001395c');
         response = await response.json();
        // console.log(response,'---hello---')
        setMoviesDetails(response)
      }
  
      fetchMyAPI()
    }, [])

    const  theWriter=Writers=>{
        if(!Writers){
            return null
        }
       const WritersArray=Writers.split(",")
       return WritersArray.map(y=><Text style={styles.textActors} key={y}>{y}</Text>)
      }

  const  theActors=actors=>{
      if(!actors){
          return null
      }
     const actorsArray=actors.split(",")
     return actorsArray.map(x=><Text style={styles.textActors} key={x}>{x}</Text>)
    }

 return(
     <>
     <ScrollView>
    <View style={styles.container}>
        <StatusBar backgroundColor='#5499D8' barStyle="light-content"/>
        <View style={styles.content}>
           <Image style={styles.img} source={{uri: item.Poster}}/>
        </View>
         <View style={styles.ItemInfo}>
           <Text style={styles.textTitle}>Title : {item.Title}</Text>

           <View>
             <Text style={styles.text}>Production : {moviesDetails.Production}</Text>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            flexWrap: 'wrap', }}>
        <Text >Actors : </Text>
        {theActors(moviesDetails.Actors)}
        </View>
            
             <Text style={styles.text}>Plot : {moviesDetails.Plot}</Text>

             <View style={{
             flexDirection:'row',
             alignItems:'center',
             flexWrap: 'wrap', 
             }}>
             <Text >Writer : </Text>
             {theWriter(moviesDetails.Writer)}
             </View>
             <Text style={styles.text}>Awards : {moviesDetails.Awards}</Text>
             <Text style={styles.text}>Language : {moviesDetails.Language}</Text>
             <Text style={styles.text}>Genre : {moviesDetails.Genre}</Text>
             <Text style={styles.text}>Released : {moviesDetails.Released}</Text>
             <Text style={styles.text}>Country : {moviesDetails.Country}</Text>
             <Text style={styles.text}>Director : {moviesDetails.Director}</Text>
            <Text style={styles.text}>Rated : {moviesDetails.Rated}</Text>
            <Text style={styles.text}>Runtime : {moviesDetails.Runtime}</Text>
            <Text style={styles.text}>Metascore : {moviesDetails.Metascore}</Text>
            <Text style={styles.text}>Type : {moviesDetails.Type}</Text>
            
           </View>
         </View>
        
    </View>
    <View style={{height:20}}>
    </View>
    </ScrollView>
    <View style={styles.bottomButton}>
               <TouchableOpacity  onPress={()=>{
                   console.log("item",item)
                   addItem(item)
                   navigation.navigate('Library')
                   }}>
                    <MaterialIcon name="bookmark" size={18} color="#fff" margin={10} />
              </TouchableOpacity>
            </View>
    </>
 )
   
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        // backgroundColor:'#f0f2f5',

    },

content:{
    alignItems: 'center',
   
    },

 img:{
    margin:10,
    width:290,
    height:360,
    },

    ItemInfo:{
        paddingLeft:15,
        paddingRight:5,
    },

    textTitle:{
     fontWeight:'bold',
     
    },

    text:{
        lineHeight:20,
        flexWrap: 'wrap',
        fontFamily:'sans-serif',
    },

    textActors:{
        borderRadius:7,
        backgroundColor:'#fff',
        // shadowColor:'#333',
        elevation:2,
        borderWidth:1,
        borderColor:'#bbb',
        padding:2,
        margin:2,
       
    },
    
// text:{
//     // textTransform: 'uppercase',
//     padding:5,
//     fontSize:14,
//     color:'#0B0B0B',
//     fontFamily:'sans-serif',
//     },

bottomButton:{
    backgroundColor: '#5499D8',
    borderRadius:25,
    padding:15,
    margin:20,
    width:50,
    height:50,
    position:'absolute',
    bottom:10,right:10
    
},

LibraryText:{
    textAlign:'center',
    color:'#ffffff',
    fontSize:14,
    fontWeight: "bold",
},

   
})
