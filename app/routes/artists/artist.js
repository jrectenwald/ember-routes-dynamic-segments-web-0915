import Ember from 'ember';

export default Ember.Route.extend({
  model(data) {
    return this.store.find('artist', data[0].artist_id);
  }
});
