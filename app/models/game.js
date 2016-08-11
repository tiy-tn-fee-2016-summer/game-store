import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  playerMax: DS.attr('number'),
  playerMin: DS.attr('number'),
  publisher: DS.attr('string'),
  releaseDate: DS.attr(),
  avgPlayTime: DS.attr('number'),
  category: DS.belongsTo('category'),
});
