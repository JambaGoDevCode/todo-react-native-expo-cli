import React from "react";
import { StyleSheet, View,  Text, Button} from 'react-native';


export default function TodoApp(props){
    return(
        <View style={[{margin:8, padding:8}, styles.item]}>
            <Text style={{paddingRight:8, width:300}}>{props.item}</Text>
            <Button title="Delete" 
            color={'red'} 
            onPress={()=> props.delete(props.item)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor:"grey",
        borderWidth:1,
        borderRadius:7,
        backgroundColor:"whitesmoke",
        padding: 8,
        color: "#000",
        margin: 8,
    }
})