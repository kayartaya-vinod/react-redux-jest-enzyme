import React from 'react';

import { shallow } from 'enzyme';
import { NameForm } from '../components/NameForm';

const props = {
    names: ['Vinod', 'Shyam'],
    addName: jest.fn()
};

describe('NameForm component tests', () => {
    let comp;

    beforeEach(() => {
        comp = shallow(<NameForm {...props} />);
    });

    it('should render with out errors', () => {
        const wrapper = comp.find('h5');
        expect(wrapper.length).toBe(1);
    });

    it('should call the addName', () => {
        const wrapper = comp.find('form');
        const evt = {
            preventDefault: jest.fn()
        };
        wrapper.simulate('submit', evt);
        expect(props.addName).toHaveBeenCalled();
    });

    it('should call the deleteHandler', () => {
        const inst = comp.instance();
        inst.changeHandler = jest.fn();
        inst.forceUpdate();

        const wrapper = comp.find('input[name="newName"]');
        const evt = {
            preventDefault: jest.fn(),
            target: {
                name: 'newName',
                value: 'Vinod'
            }
        };
        wrapper.simulate('change', evt);
        expect(inst.changeHandler).toHaveBeenCalled();
    });

});