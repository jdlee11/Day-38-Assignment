import Backbone from 'backbone';
import Band from '../models/band';
import settings from '../settings';

const Bands = Backbone.Collection.extend({
  model: Band,
  url: `http://baas.kinvey.com/appdata/${settings.appId}/bands`
});

export default Bands;
