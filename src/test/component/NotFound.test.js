import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFound';

test('shpuld test not found page', ()=>{
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});