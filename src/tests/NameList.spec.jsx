import React from 'react';

import { shallow } from 'enzyme';
import { NameList } from '../components/NameList';

const props = {
    names: ['Vinod', 'Shyam'],
    deleteName: jest.fn()
};

describe('NameList component tests', () => {
    let comp;

    beforeEach(() => {
        comp = shallow(<NameList {...props} />);
    });

    it('should render with out errors', () => {
        const wrapper = comp.find('h5.header');
        expect(wrapper.length).toBe(1);
        // console.log(comp.debug());
    });

    it('should render a <ul> tag', () => {
        const wrapper = comp.find('h5.header');
        expect(wrapper.length).toBe(1);
    });

    it('should call the deleteHandler', () => {
        const wrapper = comp.find('button.btn.btn-link').first();
        wrapper.simulate('click');
        expect(props.deleteName).toHaveBeenCalled();
    });
})