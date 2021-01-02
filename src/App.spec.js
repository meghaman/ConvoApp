import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
 
describe('Basic App Snapshot', () => {
  test('snapshot renders', () => {
    const title = 'Convo App';

    const component = renderer.create(<App title={ title } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});