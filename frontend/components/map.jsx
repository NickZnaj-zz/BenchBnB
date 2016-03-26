var React = require('react');
var BenchStore = require('../stores/bench_store.js');
var ApiUtil = require('../util/api_util.js');
var Index = require('./index');


// function placeMarkers(map) {
//   map.state.benches.forEach( function (bench) {
//     // debugger
//     var marker = new google.maps.Marker({
//       position: {lat: bench.lat, lng: bench.long},
//       map: map.map,
//       title: 'Hello World!'
//     });
//     marker.setMap(map.map);
//   });
// }


var Map = React.createClass ({
  getInitialState: function() {
    return ({benches: BenchStore.all() });
  },

  setStateFromStore: function (){

  },

  _placeMarkers: function() {
    this.state.benches.forEach( function (bench) {
      var marker = new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.long},
        map: this.map,
        title: 'Hello World!'
      });
      marker.setMap(this.map);
    }.bind(this));
  },

  _onChange: function() {
    // debugger
    this.setState({benches: BenchStore.all()});
    this._placeMarkers();
  },


  componentDidMount: function() {
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 40.724948, lng: -73.9988984},
      zoom: 17
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.benchListener = BenchStore.addListener(this._onChange);
    this.idleListener = this.map.addListener('idle', function() {
      ApiUtil.fetchBenches();
      this._placeMarkers();
    }.bind(this));
  },

  render: function() {
    debugger
    return (
      <div className="map" ref="map"></div>
    );
  }
});


module.exports = Map;
