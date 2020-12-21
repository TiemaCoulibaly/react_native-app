import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem	= props => {
  return(
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>

       <View style={styles.itemList}>
            <Text>{props.title}</Text>
        </View>
    
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
 itemList: {
    padding: 20,
    margin: 15,
    backgroundColor: '#A8CCC9',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 5,
  }
})
export default GoalItem