Package.describe({
    name: 'sgi:iron-router',
  version: '0.0.1',
  summary: 'Routing specifically designed for Meteor',
  git: 'http://github.com/sginc/iron-router',
  documentation: 'README.md'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0.3')
  api.use('reactive-dict');
  api.use('deps');
  api.use('underscore');
  api.use('ejson');
  api.use('jquery', 'client');

  // default ui manager
  // use unordered: true because of circular dependency

  // for helpers
  api.use('ui', 'client');
 
  // default ui manager
  // unordered: true because blaze-layout package weakly
  // depends on iron-router so it can register itself with
  // the router. But we still want to pull in the blaze-layout
  // package automatically when users add iron-router.
  api.use('blaze-layout', 'client', {unordered: true});

  api.addFiles('lib/utils.js');
  api.addFiles('lib/route.js');
  api.addFiles('lib/route_controller.js');
  api.addFiles('lib/router.js');

  api.addFiles('lib/client/location.js', 'client');
  api.addFiles('lib/client/router.js', 'client');
  api.addFiles('lib/client/wait_list.js', 'client');
  api.addFiles('lib/client/hooks.js', 'client');
  api.addFiles('lib/client/route_controller.js', 'client');
  api.addFiles('lib/client/ui/helpers.js', 'client');

  api.addFiles('lib/server/route_controller.js', 'server');
  api.addFiles('lib/server/router.js', 'server');

  api.use('webapp', 'server');
  Npm.depends({connect: '2.9.0'});

  api.export('RouteController');
  api.export('Route');
  api.export('Router');
  api.export('IronLocation', 'client');

  //api.export('Utils', ['client', 'server'], {testOnly: true});
  //api.export('IronRouter', ['client', 'server'], {testOnly: true});
  //api.export('WaitList', 'client', {testOnly: true});
});

//Package.on_test(function (api) {
//  api.use('iron-router', ['client', 'server']);
//  api.use('tinytest', ['client', 'server']);
//  api.use('test-helpers', ['client', 'server']);
//  api.use('reactive-dict', ['client', 'server']);
//
//  api.add_files('test/test_helpers.js', ['client', 'server']);
//
//  // client and server
//  api.add_files('test/both/route.js', ['client', 'server']);
//  api.add_files('test/both/route_controller.js', ['client', 'server']);
//  api.add_files('test/both/router.js', ['client', 'server']);
//  api.add_files('test/both/utils.js', ['client', 'server']);
//
//  // server only
//  api.add_files('test/server/router.js', 'server');
//
//  // client only
//  api.add_files('test/client/mocks.js', 'client');
//  api.add_files('test/client/router.js', 'client');
//  api.add_files('test/client/route_controller.js', 'client');
//  api.add_files('test/client/wait_list.js', 'client');
//});
