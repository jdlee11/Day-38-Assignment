import { expect } from 'chai';
import Bands from '../../app/scripts/collections/bands';
import Band from '../../app/scripts/models/band';

describe('Band Model', function(){
  let bands = new Bands();

  it('should have model of Band', () => {
    expect(bands.model).to.exist
    expect(bands.model).to.equal(Band);
  });
  it('should have appropriate url', () => {
    expect(bands.url).to.exist;
    expect(bands.url).to.equal('http://baas.kinvey.com/appdata/kid_rkzUR7HF/bands');
  });
});
