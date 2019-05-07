import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  FlatList
} from 'react-native';
import Task from './components/Task';

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
    showCompleted: true,
  }

  addTask = () => {
    const { taskName, tasks } = this.state;

    if (!taskName.trim()) return;

    const newTask = {
      id: Math.random().toString(32),
      name: taskName,
    }

    this.setState({
      tasks: tasks.concat(createTask(newTask)),
      taskName: ''
    })
  }

  handleInput = (value) => {
    this.setState({ taskName: value });
  }

  toggleCompleted = (task) =>  {
    this.setState({
      tasks: this.state.tasks.map(t => ({
        ...t,
        completed: t.id === task.id ? !t.completed : t.completed,
      })),
    })
  }

  toggleShowCompleted = () => {
    this.setState({
      showCompleted: !this.state.showCompleted
    })
  }

  renderTask = ({item}) => (
    <Task task={item} toggleCompleted={this.toggleCompleted} key={item.id}></Task>
  )
  render() {
    const tasks = this.state.showCompleted
      ? this.state.tasks
      : this.state.tasks.filter(task => !task.completed)

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.taskName}
          onChangeText={this.handleInput}
          onSubmitEditing={this.addTask}
          blurOnSubmit={false}
        />
        <TouchableHighlight onPress={this.addTask}>
          <Text>Add task</Text>
        </TouchableHighlight>
        <FlatList data={tasks} renderItem={this.renderTask} keyExtractor={(item, index) => item.id } />
        <Button title={`${this.state.showCompleted ? 'Hide': 'Show'} Completed`} onPress={this.toggleShowCompleted}/>
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
    marginTop: 100,
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '75%',
  }
});
