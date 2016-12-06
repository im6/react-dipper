import React from 'react';
import { shallow } from 'enzyme';

import ReactDipper from '../src/index.jsx';

describe('<ReactDipper />', () => {
  it('test rendering', () => {
    const wrapper = mount(<ReactDipper />);
    expect(wrapper.find('canvas')).to.have.length(1);
  });
});