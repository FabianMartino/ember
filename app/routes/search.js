import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    doSearch(searchTerm) {
      this.transitionTo('images', { queryParams : { q: searchTerm}});
   },
    goImages(){
      this.transitionTo('images');
    }
    
  }
});
