import React from 'react';
import { shallow } from 'enzyme';
import Buttoon from '../USINGENZYME/Buttoon';
import setup from '../../../jest/setup'

describe('Buttoon', () => {
 it('should be defined', () => {
   expect(Buttoon).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = shallow(
     <Buttoon name='button test' />
   );
   expect(tree).toMatchSnapshot();
 });

 it('should have a button value', () => {
    const tree = shallow(
      <Buttoon name='button test' />
    );
    expect(getElement(tree.find('Button').node.props.value)).toBe('string');
    expect(tree.find('Button').node.props.value).toEqual('button test');
  });

  it('should call mock function when button is clicked', () => {
    const mockFn = jest.fn();
    const tree = shallow(
      <Buttoon name='button test' handleClick={mockFn} />
    );
    tree.simulate('click');
    expect(jest.fn()).toHaveBeenCalledTimes(1);
  });
});