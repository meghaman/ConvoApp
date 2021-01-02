import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './App';
import rootReducer from '@Slices/index';
 
describe('Basic App Snapshot', () => {
  test('snapshot renders', () => {
    const store = configureStore({
      reducer: rootReducer
    })

    const title = 'Convo App';

    const component = renderer.create(<Provider store={store}><App title={ title } /></Provider>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});