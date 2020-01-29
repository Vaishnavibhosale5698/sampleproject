// import React from 'react';
// import {shallow} from 'enzyme';
// import Button from './Button';
// import setup from '../jest/setup'

// describe('Button', () => {
//     describe('Rendering', () => {
//         it('should match to snapshot', () => {
//             const component = shallow(<Button label="test label"/>)
//             expect(component).toMatchSnapshot()
//         });
//     });
// });

import React from 'react';
import {shallow} from 'enzyme';
import setup from '../../../jest/setup'
import Button from './Button';

describe('Button', () => {
    describe('Rendering', () => {
        it('should match to snapshot - Primary', () => {
            const component = shallow(<Button label="test label" primary />)
            expect(component).toMatchSnapshot("Primary button snapshot")
        });
        it('should match to snapshot - Secondary', () => {
            const component = shallow(<Button label="test label" primary={false} />)
            expect(component).toMatchSnapshot("Secondary button snapshot")
        });
    });
});