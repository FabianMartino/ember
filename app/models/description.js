import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr(),
  title: DS.attr(),
  image: DS.attr()
});
