import React from 'react';
import { shallow, mount, render } from 'enzyme';
import setup from '../../../jest/setup'
import renderer from 'react-test-renderer'
import Foo from '../USINGENZYME/Foo'

it('should calculate the Button clicks',()=>{
    const wrapper = shallow(<Foo/>);
    //expect(wrapper.find('.clicks-0').length).to.equal(1);
    wrapper.find('Button').simulate('click');
    //expect(wrapper.find('.clicks-1').length).to.equal(1);
    expect(wrapper.find(wrapper.state(email))).toExist()
})
