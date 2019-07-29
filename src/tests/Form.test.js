import React from 'react';
import {shallow} from 'enzyme';
import {Form, mapDispatchToProps} from '../containers/Form';
import {addIdea} from '../actions';
 
describe('Form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form/>)
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  describe('mapDispatchToProps', () => {
    it('should call action addIdea when addIdea is called', () => {
      const mockDisptch = jest.fn()
      const mockNewIdea = {
        title: 'idea',
        id: 2
      }
      const actionToDispatch = addIdea(mockNewIdea);
      const mappedProps = mapDispatchToProps(mockDisptch);
      expect(mappedProps).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})