import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
      return this.store.findRecord('description', params.item_id);
  }
});
