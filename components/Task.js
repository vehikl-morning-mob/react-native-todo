import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';


const Task = ({ task, toggleCompleted}) => {
    return (
      <TouchableHighlight testID="task" onPress={() => toggleCompleted(task)}>
        <Text style={task.completed && styles.textStrikeThrough}>{task.name}</Text>
      </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
  textStrikeThrough: {
    textDecorationLine: 'line-through'
  },
});

export default Task;
