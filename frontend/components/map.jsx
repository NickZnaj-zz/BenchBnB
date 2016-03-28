var React = require('react');
var BenchStore = require('../stores/bench_store.js');
var ApiUtil = require('../util/api_util.js');
var Index = require('./index');


// function placeMarkers(map) {
//   map.state.benches.forEach( function (bench) {
//     // debugger
//     var marker = new google.maps.Marker({
//       position: {lat: bench.lat, lng: bench.lng},
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
    // if (this.markers.length > 0){
    //   this.markers.forEach( function (marker) {
    //     marker.setMap(this.map);
    //
    //   });
    //
    // } else {
    //   debugger
      this.state.benches.forEach( function (bench) {
        var marker = new google.maps.Marker({
          position: {lat: bench.lat, lng: bench.lng},
          map: this.map,
          title: 'Hello World!'
        });
        marker.bench = bench;
        this.markers.push(marker);
        // marker.setMap(this.map);
        bench.marked = true;
      }.bind(this));
    // }
  },

  // _checkMarked: function(bench) {
  //   return bench.marked;
  // },

  // _removeMarkers: function() {
  //   if (!this.state.benches.every(this._checkMarked)) {
  //     debugger
  //     this._placeMarkers();
  //   }
  //   else if (this.markers.length > this.state.benches.length) {
  //     debugger
  //     this.markers = [];
  //     this._placeMarkers();
  //   }
  // },

  _onChange: function() {
    // debugger
    this.setState({ benches: BenchStore.all() });
    this._placeMarkers();
  },

  _getBounds: function(map) {
    var bounds = {};
    var northEast = map.getBounds().getNorthEast();
    var southWest = map.getBounds().getSouthWest();

    bounds.northEast = { "lat": northEast.lat() , "lng": northEast.lng() };
    bounds.southWest = { "lat": southWest.lat() , "lng": southWest.lng() };
    // debugger
    return bounds;
  },

  componentDidMount: function() {
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 40.724948, lng: -73.9988984},
      zoom: 17
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.markers = [];
    this.benchListener = BenchStore.addListener(this._onChange);

    this.dragEndListener = this.map.addListener('dragend', function() {
      var bounds = this._getBounds(this.map);
      ApiUtil.fetchBenches(bounds);
      this._placeMarkers();
      // this._removeMarkers();
      // debugger
    }.bind(this));

    this.zoomListener = this.map.addListener('zoom_changed', function() {
      var bounds = this._getBounds(this.map);
      ApiUtil.fetchBenches(bounds);
      this._placeMarkers();
      // this._removeMarkers();
      // debugger
    }.bind(this));
  },

  render: function() {
    // debugger
    return (
      <div className="map" ref="map"></div>
    );
  }
});


module.exports = Map;
