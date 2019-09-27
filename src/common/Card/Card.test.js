import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const setup = (props) => shallow(<Card {...props} />);

describe('Card', () => {
    const initProps = {
        title: 'test'
    }
    
    test('Card renders title', () => {
       
        const wrapper = setup(initProps);
    })
})