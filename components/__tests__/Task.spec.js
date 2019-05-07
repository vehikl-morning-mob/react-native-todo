import React from 'react';
import renderer from 'react-test-renderer';
import Task from '../Task';
import { TouchableHighlight } from 'react-native';
import { isTemplateElement } from '@babel/types';

describe('Task', () => {
  it('displays the task', () => {
    const task = {
      id: 1,
      name: 'Foo',
      completed: false,
    }
    const component = renderer.create(<Task task={ task } />).toJSON();
    expect(component).toMatchSnapshot();
  })

  it('displays completed task', () => {
    const task = {
      id: 1,
      name: 'Foo',
      completed: true,
    }
    const component = renderer.create(<Task task={task} />).toJSON();
    expect(component).toMatchSnapshot();
  })

  it('toggles completed task on click', () => {
    const task = {
      id: 1,
      name: 'Foo',
      completed: false,
    }
    const toggleCompleted = jest.fn(() => {
      task.completed = true;
    });
    const component = renderer.create(<Task task={task} toggleCompleted={toggleCompleted} />).root;

    component.findByType(TouchableHighlight).props.onPress();

    expect(toggleCompleted).toHaveBeenCalledWith(task);
    expect(task.completed).toBe(true);
  })
})