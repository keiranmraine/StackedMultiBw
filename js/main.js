define([
  'dojo/_base/declare', 'JBrowse/Plugin'
], function(declare, JBrowsePlugin) {
  return declare(JBrowsePlugin, {
    constructor: function(/* args */) {
      var version = "1.1.0";
      console.log('ProporitonalMultiBw plugin starting, version: ' + version);
    }
  });
});
