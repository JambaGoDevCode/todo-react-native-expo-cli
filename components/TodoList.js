import React, { useState} from 'react';
import {StyleSheet, View, Text, Button, ScrollView, TextInput } from 'react-native';
import TodoApp from './TodoApp';

export default function TodoList() {

    // variables
    const [ title, setTitle] = useState('Todo List');
    const [ text, setText] = useState()
    const [list, setList] = useState([])

    // methods Add item
    const addItem =()=>{
        const updatedList = list;
        updatedList.push(text)
        setList(updatedList)
        setText('')
    }

    
    // methods delete item
    const deleteItem =(index)=>{
        const updatedList = list.filter((todo) => todo !== index)
        setList(updatedList)
    }

 return (
   <View style={{ alignContent:'center', justifyContent:"center", with:'80%', marginBottom:60}}>
    <Text style={styles.alignText}>{title}</Text>

    <ScrollView>
       {list.map((x,index)=> 
       <TodoApp key={index}
       item={x}
       index={index}
       delete={deleteItem}
       />)}
    </ScrollView>

    <View>
        <TextInput 
        style={styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
        />
    </View>

    <Button title='Add todo' onPress={addItem}/> 
   </View>
  );
}
 
const styles = StyleSheet.create({
    alignText:{
        alignSelf:"center",
        fontSize: 20,
        fontWeight:'bold',
        marginTop:80,
    },
    input:{
        borderRadius:7,
        borderWidth:1,
        marginBottom: 8,
        padding: 8,
     
    }
})

