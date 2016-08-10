import Session from './models/session';
import Bands from './collections/bands';

export default {
  session: new Session(),
  bandCollection: new Bands()
};
