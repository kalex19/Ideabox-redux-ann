import React from 'react';
import {shallow} from 'enzyme';
import {Card, mapDispatchToProps} from '../containers/Card';
import {deleteIdea} from '../actions';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card/>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('should call the deleteIdea action when deleteIdea is called', () => {
      const mockDispatch = jest.fn();
      const mockId = 2;
      const actionToDispatch = deleteIdea(mockId);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteIdea(mockId);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  })
})