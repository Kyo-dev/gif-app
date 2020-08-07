import'@testing-library/jest-dom'
import React from 'react'
import {shallow} from 'enzyme'
import GifApp from '../GifApp'

describe('test in GifApp', () => {

    
    test('should component OK', () => {
        const wrapper = shallow(<GifApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should list categories  ', () => {
        const categories = ['samurai X', 'Sakura card captor'];
        const wrapper = shallow(<GifApp defaultCategories = {categories} />);
        expect(wrapper.find('GifCollection').length).toBe(categories.length);

    })
    
})
