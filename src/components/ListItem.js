import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({item}) => {
  return (
    <View>
      <Text style={styles.list}> {item.text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    list:{
        fontSize: 20,
        marginVertical: 2,
        
      },
});

export default ListItem;