import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search');
  this.route('images');
  this.route('description', function() {
    this.route('new');
  });
  this.route('bookmarks');
  this.route('image', { path: '/image/:image_id'});
  this.route('itemdescription', { path: '/itemdescription/:item_id' });
});

export default Router;
