
import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList , Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import {useState} from "react";
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
    console.log("hola")

  };

  const clearList = ()=>{
    setList([]);
    setisModalVisible(false);
  };
  
  return (
    <View style={styles.container}>
      <Modal 
        visible={isModalVisible}
        animationType= "slide"
        >
        
          <View style={styles.modalView}>
            <Text style={styles.modalText}> Seguro que querés eliminar la lista?</Text>
            
            <View>
            <Pressable 
                style={styles.buttonModalSi}
                onPress={()=> clearList()}>
                <Text style={styles.SiNo }>Si</Text>
              </Pressable>
              <Pressable 
                style={styles.buttonModalNo}
                onPress={()=> setisModalVisible(false)}>
                <Text style={styles.SiNo }>No</Text>
              </Pressable>
            </View>
              
          </View>
        
      </Modal>
      <Image
        style={styles.imagen}
        source={{
          uri: 'https://png.pngtree.com/png-clipart/20191120/original/pngtree-check-list-icon-isolated-on-abstract-background-png-image_5087110.jpg',
        }}
      />
      
      <Text style={styles.titulo}>Lista de compras</Text>
      <View style= {styles.buttonContainer}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder= "Escriba aquí..." 
            style={styles.modalView}
            value= {text}
            onChangeText= {(value)=>setText(value)} 
            />

        </View> 

        <Pressable style={styles.add} onPress= {()=>addItem()}>
          <Ionicons name="add-circle-outline" size={40} color="purple" />
        </Pressable> 
      </View>    
        
        <FlatList
        data={list} 
        keyExtractor={(item)=>item.id}
        renderItem={({ item})=>(
          <Text style={styles.list}> {item.text} </Text>
        )}
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

  

  list:{
    fontSize: 20,
    marginVertical: 2,
    
  },
  
  inputContainer:{
    marginTop: 20,
    padding:5,
  },

  buttonContainer:{
    flexDirection:"row",
    alignItems:"center"
  },

  add:{
    marginTop: 20,
    marginLeft: 10,
  },

  imagen:{
    marginTop: 30,
    height: 100,
    width: 100,
    
  },
  
  modalView: {
    fontSize:15,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: "purple",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    
  },
  buttonModalNo:{
    width: 60,
    backgroundColor: "purple",
    padding: 10,
    borderRadius:20,
    
  },
  buttonModalSi:{
    width: 60,
    backgroundColor: "purple",
    padding: 10,
    borderRadius:20,
    
  },
  SiNo:{
    color:"white",
    textAlign: "center",
    fontWeight: "bold"
  
  },
  modalText: {
    fontSize: 30,
    textAlign: 'center',

  },
  


 
});
