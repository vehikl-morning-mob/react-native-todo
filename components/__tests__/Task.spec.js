import React from 'react';
import renderer from 'react-test-renderer';
import Task from '../Task';

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
    const toggleCompleted = jest.fn();
    const component = renderer.create(<Task task={task} toggleCompleted={toggleCompleted} />).root;
    component.findByProps({ testID: 'task' }).simulate('press');

    expect(toggleCompleted).toHaveBeenCalled();
  })
})