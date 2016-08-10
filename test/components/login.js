import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Login from '../../app/scripts/components/login';

describe('<Login />', function() {
  let login = shallow(<Login />);

  it('should render a div', () => {
    expect(login.is('div')).to.be.true;
  });
});
