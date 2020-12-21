import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, Button } from 'react-native';
import GoalItem from './app/components/GoalItem';
import GoalInput from './app/components/GoalInput';
//import WelcomeScreen from './app/screens/WelcomeScreen';
//import ViewImageScreen from './app/screens/ViewImageScreen'


export default function App() {

  const [goalCourses, setGoalCourses] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);



  const handleClick = goalTitle => {
   setGoalCourses(currentGoals => [
     ...currentGoals,
     {id: Math.random().toString(), value: goalTitle}
   ]);
   setIsAddMode(false);
  }
  const removeGoalHandler = goalId => {
    setGoalCourses(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId); 
    })
  }
 
const cancelGoal = () => {
  setIsAddMode(false);
}
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Button title="Add new Goal" onPress={() => setIsAddMode(true)}/>
       <GoalInput 
        visible={isAddMode} 
        addClick={handleClick} 
        onCancel={cancelGoal}
          
        />

        <FlatList
          keyExtractor={(item, index) => item.id}
          data={goalCourses}
          renderItem={itemData => (     
          <GoalItem 
            id={itemData.item.id}
            onDelete={removeGoalHandler} 
            title={itemData.item.value}  
           />
          )}
        />       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  },

})