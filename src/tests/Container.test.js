import {shallow} from 'enzyme';
import {Container, mapStateToProps} from '../containers/Container';
import React from 'react';

describe('Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Container/>);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  describe('mapStateToProps', () => {
    it('should reutrn an array of ideas', () => {
      const mockIdea = [{title: 'idea', id: 1}, {title: 'idea two', id: 2}];
      const mappedProps = mapStateToProps(mockIdea);
      expect(mappedProps).toEqual(mockIdea);
    });
  })
})