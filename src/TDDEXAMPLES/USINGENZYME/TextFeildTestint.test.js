import React from 'react';
import { shallow, mount, render } from 'enzyme';
import setup from '../../../jest/setup'
import renderer from 'react-test-renderer'
import TextFeildTesting from '../USINGENZYME/TextFeildTesting';

describe('TextFeilsTesting', () => {
    it('should render the TextFeildTesting page without crashing', () => {
        const rendered = renderer.create(<TextFeildTesting />).toJSON();
        expect(rendered).toBeTruthy();
    })

    it('should render the Title Text element', () => {
        const wrapper = shallow(<TextFeildTesting />)
        expect(wrapper.first('Text')).toHaveLength(1);
    })

    it('should change the state if email is entered', () => {
        // const instanceOf = renderer.create(<TextFeildTesting />).getInstance();
        // instanceOf.handleTextEmail('abc@abc.com')
        // expect(instanceOf.this.state.email).toEqual('abc@abc.com')

        const wrapper = shallow(<TextFeildTesting />)
        // wrapper.handleTextEmail('abc@abc.com')
        // expect(wrapper.state('email')).toEqual('abc@abc.com')
        let { handleSubmit } = wrapper.instance();
        wrapper.find('Button').simulate('click');
        expect(handleSubmit).toHaveValue(1) 
       // expect(wrapper.state(email)).toBe('abc@abc.com');       
          // wrapper.findWhere(wrapper.find('text')).toBeTruthy()
    //     wrapper.find('text').value('Hello')
    })
})



