import React,{useEffect, useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {getImages} from '../api/pexels'
import ImageList from '../components/ImageList';
import {Input,Button} from 'react-native-elements';

const HomeScreens = ({openSearch}) => {
    const [photos,setPhotos] =useState([]);
    const [searchTerm,setSearchTerm] =useState('');
    

const loadImages = async(searchTerm) =>{
    const res =  await getImages(searchTerm)
    console.log(res.headers)
    setPhotos(res.data.photos)
}

    useEffect(()=> {
       loadImages()
    },[]);

    const handleSearch = async() => {
     await  loadImages(searchTerm);
    }

    return (
        <>
        {openSearch && (
            <View style={styles.searchSection}>
                <Input 
                leftIcon={{ type:'feather',name:'search' ,color:'#fff'}}
                inputContainerStyle={styles.searchInput} 
                style={ styles.input }
                leftIconContainerStyle={styles.searchLeftIcon}
                placeholder='search a term'
                onChangeText={(value)=> setSearchTerm(value)}
                />
                <Button buttonStyle={styles.buttonSearch} title="Search" onPress={()=>handleSearch()}/>
            </View>
        )}
        <View style={styles.container}>
            <Text style={styles.TotalResultsText}>1000 Results</Text>
           <ImageList photos={photos}/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#0d0d0d',
        alignItems:'center',
        justifyContent:'center',
    },
    TotalResultsText:{
        color:'#D0D0D0',
        textAlign:'right',
        width:'100%',
       
    },
    searchSection:{
        backgroundColor:'#0D0D0D',
        width:'100%',
        paddingLeft:10,
        paddingRight:80,
        flex: 1/5,
        flexDirection:'row',
        alignItems:'center',
    },
    searchInput:{
        backgroundColor:'#2c292c',
        borderBottomWidth:0,
        paddingHorizontal:4,
    },
   input:{
        color:'#fff',
   },
   searchLeftIcon:{
        paddingStart:10,
        marginRight:7,
   },
   buttonSearch:{
        backgroundColor:'#229783',
        marginBottom:27,
   },
});

export default HomeScreens
