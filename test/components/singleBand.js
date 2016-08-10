import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import SingleBand from '../../app/scripts/components/singleBand';

describe('<SingleBand />', function() {
  let searchedBand = shallow(<SingleBand band={{name: 'Band Name', images: []}} canVote={true}/>);
  let votedBand = shallow(<SingleBand band={{name: 'Another Name', images: []}} canVote={false}/>);

  it('should render a div', () => {
    expect(searchedBand.is('div')).to.be.true;
    expect(votedBand.is('div')).to.be.true;
  });

  it('should access band and canVote props', () => {
    expect(searchedBand.props().band).to.be.defined;
    expect(searchedBand.props().canVote).to.be.defined;
  });
  it('should have voteFunction', () => {
    expect(searchedBand.props().voteFunction).to.be.defined;
  });
});
