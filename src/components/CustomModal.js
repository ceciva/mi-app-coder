import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'

const CustomModal = ({isModalVisible, setisModalVisible, clearList}) => {
  return (
    <View>
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
    </View>
  )
}

export default CustomModal

const styles = StyleSheet.create({
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
      
})