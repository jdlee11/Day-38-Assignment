import { expect } from 'chai';
import Session from '../../app/scripts/models/session';

describe('Session Model', function(){
  let testSession = new Session();

  it('should have login function', () => {
    expect(testSession.login).to.be.defined;
  });
  it('should have signup function', () => {
    expect(testSession.signup).to.be.defined;
  });
});
