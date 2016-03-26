var React = require('react');
var BenchStore = require('../stores/bench_store.js');
var ApiUtil = require('../util/api_util.js');

var Map = require('./map');
var Index = require('./index');

var Search = React.createClass({
  render: function() {
    return (
      <div>
        <Map />
        <Index />
      </div>
    );
  }
});


module.exports = Search;
