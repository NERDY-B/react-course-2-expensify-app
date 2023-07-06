import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should test expense dash baord page', ()=>{
    const wrapper = <ExpenseDashboardPage />;
    expect(wrapper).toMatchSnapshot();
})