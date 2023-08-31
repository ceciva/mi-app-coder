import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const AddItem = ({text, setText, addItem}) => {
  return (
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
    );
};

export default AddItem

const styles = StyleSheet.create({
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
    
})