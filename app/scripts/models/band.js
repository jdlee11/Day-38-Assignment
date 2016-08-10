import Backbone from 'Backbone';
import settings from '../settings';

const Band = Backbone.Model.extend({
  urlRoot: `http://baas.kinvey.com/appdata/${settings.appId}/bands`,
  idAttribute: '_id'
});

export default Band;
