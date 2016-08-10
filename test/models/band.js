import Band from '../../app/scripts/models/band';
import { expect } from 'chai';

describe('Band Model', function(){
  let band = new Band();

  it('should have idAttribute of _id', () => {
    expect(band.idAttribute).to.exist
    expect(band.idAttribute).to.equal('_id');
  });
  it('should have appropriate urlRoot', () => {
    expect(band.urlRoot).to.exist;
    expect(band.urlRoot).to.equal('http://baas.kinvey.com/appdata/kid_rkzUR7HF/bands');
  });
});
