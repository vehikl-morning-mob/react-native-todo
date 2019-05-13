import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App'
import { TextInput, TouchableHighlight } from 'react-native';
import TaskEntity from '../../entities/task';


describe('App', () => {
  describe('Incoming Commands', () => {
    it('can hide completed tasks', () => {
      const testInstance = renderer.create(<App />);
      const component = testInstance.root.instance;
      const task = new TaskEntity(1, 'whatever man')
      task.markComplete()

      component.setState({
        tasks: [
          task
        ],
        showCompleted: false
      })
      expect(testInstance.toJSON()).toMatchSnapshot();
    })
  })
  it('Renders an empty list', () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  })

  it('Adds task using add task touchableHighlight', () => {
    const component = renderer.create(<App />);
    const instance = component.root;
    instance.findByType(TextInput).props.onChangeText('task1');
    instance.findByType(TouchableHighlight).props.onPress();
    expect(component.toJSON()).toMatchSnapshot();
  })

  it('Adds a task when enter/return is pressed', () => {
    const component = renderer.create(<App />);
    const instance = component.root;

    instance.findByType(TextInput).props.onChangeText('task1');
    instance.findByType(TextInput).props.onSubmitEditing();
    expect(component.toJSON()).toMatchSnapshot();
  })
})