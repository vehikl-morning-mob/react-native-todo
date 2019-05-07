import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App'
import { TextInput, TouchableHighlight } from 'react-native';


describe('App', () => {
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