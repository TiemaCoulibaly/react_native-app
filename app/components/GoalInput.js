import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  
  const [enteredGoal, setEnteredGoal] = useState('');

    const handleChange = (enteredTextGoal) => {
    setEnteredGoal(enteredTextGoal);
  }
  const addGoalHandler = () => {
    props.addClick(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
       <View style={styles.inputContainer}>
          <TextInput
            placeholder= 'Enter your goal'
            style={styles.input}
            value={enteredGoal}
            onChangeText={handleChange}
           
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button 
                title='Cancel' 
                color='red' 
                onPress={props.onCancel}
                />
            </View>
            <View style={styles.button}>
              <Button title="ADD" 
                onPress={addGoalHandler}
                />
            </View>
          </View>
        </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  
  inputContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
    input: {
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer:{
    flexDirection: 'row',
   justifyContent: 'space-between',
   width: '50%'
  },
  button: {
    width: '45%'
  }
 
})
export default GoalInput;