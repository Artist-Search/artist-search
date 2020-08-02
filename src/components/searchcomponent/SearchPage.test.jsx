import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from './SearchPage';

describe('SearchPage component', () => {
  it('renders SearchPage', () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
