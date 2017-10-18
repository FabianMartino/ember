
import Route from '@ember/routing/route';

export default Route.extend({
  ajax: Ember.inject.service(),
  bookmarks: Ember.inject.service(),

  //transition es el objeto que recibe el model hook, trae toda la info
  model(params, transition) {
    // console.log(this.get('ajax').request('http://images-api.nasa.gov/search?media_type=image&q='+transition.queryParams['q']));
    return this.get('ajax').request('http://images-api.nasa.gov/search?media_type=image&q='+transition.queryParams['q']);
  },

  actions: {
    addBookmark(imageTitle){
      this.get('bookmarks').add(imageTitle);
    }
  }
});

    // var array = [ transition.queryParams['q'] ];
    // return array;

    // var array = [{
    //   name: 'sil',
    //   description: '22'
    // },
    // {
    //   name: 'fabian',
    //   description: '27'
    // }]
    // return array;
