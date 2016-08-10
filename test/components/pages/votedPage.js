import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import VotedPage from '../../../app/scripts/components/pages/votedPage';

describe('<VotedPage />', function(){
  let votedpage = shallow(<VotedPage />);

  it('should render a div', () => {
    expect(votedpage.is('div')).to.be.true;
  });
});
