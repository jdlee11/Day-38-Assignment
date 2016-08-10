import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import SearchPage from '../../../app/scripts/components/pages/searchPage';

describe('<SearchPage />', function(){
  let searchpage = shallow(<SearchPage />);

  it('should render a div', () => {
    expect(searchpage.is('div')).to.be.true;
  });
});
