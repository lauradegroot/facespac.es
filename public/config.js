requirejs.config({
  deps: ['main'],
  paths: {
    'jquery': 'lib/jquery/jquery',
    'fingerprint': 'lib/fingerprint/fingerprint',
    'md5': 'lib/js-md5/js/md5',
    'waypoints': 'lib/jquery-waypoints/waypoints',
    'moment': 'lib/momentjs/moment',
    'favico': 'lib/favico.js/favico',
    'gumhelper': 'lib/gumhelper/gumhelper'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'fingerprint': {
      exports: 'Fingerprint'
    }
  }
});
