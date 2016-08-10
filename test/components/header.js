import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../app/scripts/components/header';

describe('<Header />', function(){
  let header = shallow(<Header />);

  it('should render a div', () => {
    expect(header.is('div')).to.be.true;
  });
});
