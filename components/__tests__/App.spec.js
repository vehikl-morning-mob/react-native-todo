import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App'
import { TextInput, TouchableHighlight } from 'react-native';
import TaskEntity from '../../entities/task';
import Task from '../../components/Task'


describe('App', () => {
  describe('Incoming Commands', () => {
    it('can hide completed tasks', () => {
      const testInstance = renderer.create(<App />);
      const component = testInstance.root.instance;
      const task = new TaskEntity(1, 'whatever man', true)

      component.setState({
        tasks: [
          task
        ],
        showCompleted: false
      })
      expect(testInstance.toJSON()).toMatchSnapshot();
    })

    it.skip('can mark task as complete', () => {
      const task = new TaskEntity(1, 'whatever man', false)
      const component = renderer.create(<App initialTasks={[task]} />);
      const { instance } = component.root;

      const spy = jest.spyOn(instance, 'toggleComplete');
      /*
        Tasks aren't being rendered OR not being found
      */
      component.root.findByType(Task).props.onPress();
      expect(spy).toBeCalled();
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

  describe('Incoming Queries', () => {
    it('Renders an empty list', () => {
      const component = renderer.create(<App />).toJSON();
      expect(component).toMatchSnapshot();
    })
  })
})