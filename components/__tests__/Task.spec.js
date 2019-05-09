import React from 'react';
import renderer from 'react-test-renderer';
import Task from '../Task';
import { TouchableHighlight } from 'react-native';
import TaskEntity from '../../entities/task';


describe('Incoming Queries to a Task', () => {
  it('displays the task', () => {
    const task = new TaskEntity('Foo')

    const component = renderer.create(<Task task={task} />).toJSON();
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
})

describe('Outgoing Commands from Task Component', () => {
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

describe('Incoming Commands on Task', () => {
  it('can be marked as complete', () => {
    const task = new TaskEntity();
    expect(task.completed).toBe(false);
    task.markComplete();
    expect(task.completed).toBe(true);
  })

  it('accepts name of task', () => {
    const task = new TaskEntity("foo");
    expect(task.name).toBe("foo");
  })
})