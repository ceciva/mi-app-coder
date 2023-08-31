
import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList , Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import {useState} from "react";
import AddItem from './src/components/AddItem';
import ListItem from './src/components/ListItem';
import CustomModal from './src/components/CustomModal';

export default function App() {

  const initialState =[
    {id:1, text: "Harina"},
    {id:2, text: "Azucar"},
    {id:3, text: "Cereales"},
  ]

  const [text, setText] = useState("");
  const [list, setList]= useState(initialState);
  const [isModalVisible, setisModalVisible]= useState(false);
  
  const addItem = () => {
    list.push({
      id: Math.random(),
      text:text,
    });

    setList(list)
    setText("")
  };
  
  const clearList = ()=>{
    setList([]);
    setisModalVisible(false);
  };
    
  return (
    <View style={styles.container}>

      {/* modal */}
      <CustomModal isModalVisible={isModalVisible} setisModalVisible={setisModalVisible} setList={setList} clearList= {clearList} />
      
      <Image
        style={styles.imagen}
        source={{
          uri: 'https://png.pngtree.com/png-clipart/20191120/original/pngtree-check-list-icon-isolated-on-abstract-background-png-image_5087110.jpg',
        }}
      />
      
      <Text style={styles.titulo}>Lista de compras</Text>

      {/* Input y el botón + para agregar */}
      <AddItem text={text} setText={setText} addItem={addItem}/> 

      <FlatList
      data={list} 
      keyExtractor={(item)=>item.id}
      renderItem={({ item})=> <ListItem item={item}/>}
      />

      <Pressable style={styles.button} onPress={()=>setisModalVisible(true)}>
        <Ionicons name="trash" size={40} color="purple"/>
      </Pressable>  
     
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    marginTop:10,
    fontSize:20,
    borderBottomColor: "purple",
    borderBottomWidth: 5,
  },

  imagen:{
    marginTop: 30,
    height: 100,
    width: 100,
    
  },
  
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  
  },

});
