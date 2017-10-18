import Route from '@ember/routing/route';

export default Route.extend({
  bookmarks: Ember.inject.service(),

  model(){
    //console.log(this.get('bookmarks').getItems());
    return this.get('bookmarks').getItems();
  },

  actions: {
    removeB(title){
      this.get('bookmarks').remove(title);
    }
  }

});
