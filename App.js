import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

const tasks = [
  {
    id: '',
    name: '',
    description: '',
    completed: false,
  }
];

const createTask = ({ id, name }) => {
  return {
    id,
    name,
    completed: false,
  }
}

export default class App extends React.Component {
  state = {
    tasks: [],
    taskName: '',
  }

  addTask = () => {
    const newTask = {
      id: Math.random().toString(32),
      name: this.state.taskName,
    }

    this.setState({
      tasks: this.state.tasks.concat(createTask(newTask)),
      taskName: ''
    })


  }

  handleInput = (value) => {
    this.setState({ taskName: value });
  }

  completedTask = (task) =>  {
    this.setState({
      tasks: this.state.tasks.map(t => ({
        ...t,
        completed: t.id === task.id ? true : t.completed,
      })),
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={this.state.taskName} onChangeText={this.handleInput}/>
        <TouchableHighlight onPress={this.addTask}>
          <Text>Add task</Text>
        </TouchableHighlight>
        {this.state.tasks.map((task) => {
          return (
            <TouchableHighlight onPress={() => this.completedTask(task)} key={task.id}>
              <Text textDecorationLine={task.completed ? 'line-through' : 'none'}>{task.name}</Text>
            </TouchableHighlight>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '75%',
  }
});
